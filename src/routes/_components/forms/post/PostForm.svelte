
<script>
  import { Server as S } from "../../../_modules/ws_events_dispatcher.js";
  import { sfx, m_all, p_all, p_save_,p_del_, makeObject, nullFirstarrayFix } from "../../../_modules/functions.js";
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import flatpickr from 'flatpickr';
  import SubmitButton from '../../ui/SubmitButton.svelte'
  import CancelButton from '../../ui/CancelButton.svelte';
  const dp = createEventDispatcher();

  export let rowIdx = 0;
  export let item = [];
  export let hs = [];

  let isSaving = false;
  let er = "";  
  let date = null;
  let form = {
    type: "post",

    visibility: "public",
    title: "",
    name: "",
    excerpt: "",
    content: "",
    menu_order: 0,
    date: "",
    status: "published",
    comment_status: true,
    password: "",
  };

  const fns = [];

  if (item.length) {
    form = makeObject(hs, item)
    setPasswordDisabled(); /* take care*/
  }
  
  fns.push(p_save_("post", rowIdx)); S.bind$(fns.i(-1), (d) => {isSaving = false; if (d.ok) {  er = ""; dp("successSave", { rowIdx, d }); } else { er = d.error; } });
  S.bind$(p_del_("post", rowIdx), (d) => { isSaving = false; if (d.ok) {  er = ""; dp("deleteRow", { rowIdx, d }); } else { er = d.error; } });

  onMount(async () => {
    // setup date:
    const elem = date
    const defaultDate = form.date || (new Date()).toISOString();
    form.date = defaultDate;
    flatpickr(elem, {
          altInput: true,
          altFormat: "F j, Y G:i K",
          //dateFormat: "Y-m-d",
          //allowInput: true,
          enableTime: true,
          defaultDate,
          onChange: (selectedDates, dateStr, instance) => {
            form.date = selectedDates[0].toISOString()
          }
    })
    
     if (window.hasOwnProperty("tinymce")) {
       const preimium = "advcode powerpaste linkchecker mediaembed tinymcespellchecker a11ychecker mentions formatpainter permanentpen pageembed tinycomments  "
       const p = "print preview fullpage  searchreplace autolink directionality  visualblocks visualchars fullscreen image link media  template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount   imagetools textpattern help"
      tinymce.init({ plugins: p, selector: '.tinymce_p_content', forced_root_block: false, setup: function (e) { e.on('change', () => { e.save(); form.content = e.getContent() }); } })
      tinymce.init({ plugins: p, selector: '.tinymce_p_excerpt', forced_root_block: false, setup: function (e) { e.on('change', () => { e.save(); form.excerpt = e.getContent() }); } })
     }
  });
  onDestroy(() => { if(process.browser) S.unbind_(fns) });
  
  async function save() { isSaving = true; S.trigger(p_save_("post", rowIdx), form); }
  function clearError() { er = ""; }

  async function deleteRow() { isSaving = true; S.trigger(p_del_("post", rowIdx), [form.id]); }
  // ------------
  function setPasswordDisabled() { if (form.visibility != "password protected") { form.password = ""; } }

  import 'flatpickr/dist/flatpickr.css'
	import 'flatpickr/dist/themes/light.css'

</script>

<style>
input[type=checkbox] {width:20px; height:20px;}
input:invalid {
  color: red;
}
</style>

<form on:submit|preventDefault={save} >
	<label><span>Title</span><input type="text" bind:value={form.title} required on:change={_=> {if(!form.name.length){form.name = form.title.toLowerCase().replace(/\s/g, "_")}}} /></label>
	<label><span>Slug</span><input type="text" bind:value={form.name} required/></label>
	<label><span>Date</span><input bind:this={date} /></label>

  <label><span>Position</span><input type="number" bind:value={form.menu_order} /></label>
	<label><span>Enable reviews</span><input type="checkbox" bind:checked={form.comment_status} /></label>

	<label><span>Status</span>
		<select bind:value={form.status} size=3 >
			<option value="published">Published</option>
			<option value="pending review">Pending Review</option>
			<option value="draft">Draft</option>
		</select>
	</label>

    <label><span>Visibility</span>
			<select bind:value={form.visibility} on:change|preventDefault={setPasswordDisabled} >
				<option value="public">Public</option>
				<option value="password protected">Password protected</option>
				<option value="private">Private</option>
			</select>
		</label>
    {#if form.visibility == "password protected"}
       <label><span>Password</span><input type="text" bind:value={form.password} disabled={form.visibility != "password protected"}/></label>
    {/if}

    <b>Details:</b><textarea class="tinymce_p_content" cols="20" rows="50" bind:value={form.content} ></textarea>
    <b>Short description:</b><textarea class="tinymce_p_excerpt" cols="20" rows="2" bind:value={form.excerpt}></textarea>
    
  <div> {er} </div>

  <footer>
    <SubmitButton {isSaving} />
    <CancelButton {isSaving} {rowIdx} on:close />
    {#if rowIdx !== null} <button type="button" on:click={deleteRow} >Delete</button> {/if}
  </footer>
</form>

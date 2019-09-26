<script>
  import clsx from 'clsx';
  import { clean } from './utils';
  
  let className = '';

  const props = clean($$props);

  export { className as class };
  export let fore;
  export { fore as for };
  export let id = '';
  
  $: classes = clsx(
    className,
    "form--label"
  );

</script>

<label {...props} {id} class="{classes}" for="{fore}">
  <slot />
</label>

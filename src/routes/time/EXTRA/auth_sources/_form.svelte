<script>

</script>

<style>
  
</style>
<!-- 


<%#
  needs locals:
  f: labelled form builder
%>

{ error_messages_for :auth_source %>
<section class="form--section">
  <div class="form--field">{ f.text_field 'name', required: true %></div>
  <div class="form--field">{ f.check_box 'onthefly_register', label: AuthSource.human_attribute_name(:onthefly) %></div>
</section>
 -->
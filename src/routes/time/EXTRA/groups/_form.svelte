<script>

</script>

<style>
  
</style>
<!-- 


<%#
  needs locals:
  f: labelled form builder
%>

{ error_messages_for :group %>

<section class="form--section">
  <div class="form--field -required">
    { f.text_field :lastname,
                     label: Group.human_attribute_name(:name),
                     required: true,
                     container_class: '-middle' %>
  </div>

  { render partial: 'customizable/form', locals: { form: f,
                                                     all_fields: true,
                                                     only_required: false } %>
</section>
 -->
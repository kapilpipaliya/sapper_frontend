<script>
export let message_details;
if(message_details){
  let error_details = "<p>{ @message_details }</p>"
}
 let error_message = "[#{I18n.t(:error_code, code: @status)}] #{@message}"
</script>

<style>
  
</style>
<!-- 
{ render partial: "common/error_base", locals: { error_message: error_message } }
{ call_hook(:view_common_error_details, { params: params, project: ((defined? @project) ? @project : nil) }) }

<% html_title h(@status) %>
 -->
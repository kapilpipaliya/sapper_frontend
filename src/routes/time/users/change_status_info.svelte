<script>

</script>

<style>
  
</style>
<!-- 

<% html_title(l(:label_administration), "#{ l(:label_change_status_of_user, username: @user.name)}") -%>
<% local_assigns[:additional_breadcrumb] = @user.name %>

<% new_status =  t("user.#{@status_change}") %>
{ labelled_tabular_form_for :user, url: change_status_user_path(@user, @status_change => '1'), html: { method: :post, class: 'form' } do %>
    <section class="form--section">
      <h3 class="form--section-title">
        { @user.name %>:
        { new_status %>
      </h3>

      <p>
        { t('user.confirm_status_change', name: @user.name) %>
      </p>

      <div class="attributes-key-value">
        <div class="attributes-key-value--key">{ User.human_attribute_name :login %></div>
        <div class="attributes-key-value--value-container">
          <div class="attributes-key-value--value -float">
            <span>{ @user.login %></span>
          </div>
        </div>

        <div class="attributes-key-value--key">{ User.human_attribute_name :mail %></div>
        <div class="attributes-key-value--value-container">
          <div class="attributes-key-value--value -float">
            <span>{ @user.mail %></span>
          </div>
        </div>

        <div class="attributes-key-value--key">{ User.human_attribute_name :name %></div>
        <div class="attributes-key-value--value-container">
          <div class="attributes-key-value--value -float">
            <span>{ @user.name %></span>
          </div>
        </div>

        <div class="attributes-key-value--key">{ t(:label_current_status) %></div>
        <div class="attributes-key-value--value-container">
          <div class="attributes-key-value--value -float">
            <span class="">{ full_user_status(@user, true) %></span>
          </div>
        </div>

        <div class="attributes-key-value--key"><strong>{ t(:status_change) %></strong></div>
        <div class="attributes-key-value--value-container">
          <div class="attributes-key-value--value -float">
            <strong>{ new_status %></strong>
          </div>
        </div>
      </div>

    </section>
    <hr class="form--separator" />
      { styled_button_tag '', class: '-highlight' do %>
        { op_icon('button--icon icon-checkmark') %>
        <span class="button--text">{ new_status %></span>
      {/each}
{/each}
 -->
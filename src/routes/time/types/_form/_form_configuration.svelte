<script>

</script>

<style>
  
</style>
<!-- 


<% form_attributes = form_configuration_groups(@type) %>

<section class="form--section">
  <div>
    <div class="grid-block -visible-overflow wrap">
      <div class="grid-content -visible-overflow small-12 large-10">
        <div class="notification-box -info">
          <div class="notification-box--content">
            <p>{ t('text_form_configuration') %></p>
            <br>
            <p>{ t('text_custom_field_hint_activate_per_project') %></p>
          </div>
        </div>

        {#if EnterpriseToken.show_banners? }
          <div class="notification-box upsale-notification">
            <div class="notification-box--content">
              <h3>{ t('admin.enterprise.upgrade_to_ee') %></h3>
              { image_tag "enterprise_edition.png", class: "widget-box--teaser-image" %>

              <p>{ t('ee.upsale.form_configuration.description') %></p>

              <ul class="">
                <li>
                  { t('ee.upsale.form_configuration.add_groups') %>
                </li>
                <li>
                  { t('ee.upsale.form_configuration.rename_groups') %>
                </li>
              </ul>
              <p>
                <br/>
                <b>{ t('homescreen.blocks.upsale.become_hero') %></b> { t('homescreen.blocks.upsale.you_contribute') %>
              </p>
              { link_to("#{OpenProject::Static::Links.links[:upsale][:href]}/?utm_source=unknown&utm_medium=community-edition&utm_campaign=form-configuration",
                          { class: 'button -alt-highlight',
                            aria: { label: t('admin.enterprise.order') },
                            target: '_blank',
                            title: t('admin.enterprise.order') }) do %>
                { op_icon('button--icon icon-add') %>
                <span class="button--text">{ t('admin.enterprise.order') %></span>
              {/each}
            </div>
          </div>
        {/each}
        <% no_filter_query = ::API::V3::Queries::QueryParamsRepresenter.new(Query.new_default.tap { |q| q.filters = [] }).to_json %>
        { f.hidden_field :attribute_groups, value: '', class: 'admin-type-form--hidden-field'  %>
        { content_tag('admin-type-form-configuration',
                        '',
                        data: {
                            'active-groups': form_attributes[:actives],
                            'inactive-attributes': form_attributes[:inactives],
                            'no-filter-query': no_filter_query
                        }) %>
      </div>
    </div>
  </div>
</section>

<div class="grid-block">
  <div class="generic-table--action-buttons">
    { styled_button_tag t(@type.new_record? ? :button_create : :button_save),
                          class: 'form-configuration--save -highlight -with-icon icon-checkmark' %>
  </div>
</div>
 -->
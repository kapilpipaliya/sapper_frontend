<script>
import {Form} from '../_components/index.js'
</script>

<style>
  
</style>

<template lang="pug">
Form.-wide-labels.user-login--form.form(autocomplete='off') hi
</template>

<!-- 

{ styled_form_tag({action: "login"}, autocomplete: 'off', class: '-wide-labels user-login--form') do %>
  { back_url_hidden_field_tag %>

  <div class="form--field -required">
    { styled_label_tag 'username', User.human_attribute_name(:login) %>
    <div class="form--field-container">
      { styled_text_field_tag 'username', params[:username], autofocus: params[:username].blank?, autocapitalize: 'none' %>
    </div>
  </div>

  <div class="form--field -required">
    { styled_label_tag 'password', User.human_attribute_name(:password) %>
    <div class="form--field-container">
      { styled_password_field_tag 'password', nil, autofocus: !params[:username].blank? %>
    </div>
  </div>

  {#if Setting.autologin? }
    <div class="form--field -no-label">
      <div class="form--field-container">
        <label for="autologin" class="form--label-with-check-box">
          { styled_check_box_tag 'autologin', 1, false %>
          { l(:label_stay_logged_in) %>
        </label>
      </div>
    </div>
  {/each}

  <input type="submit" name="login" value="{l(:button_login)%>" class="button -highlight" />

  <div class="login-options-container">
    <div class="login-links">
      {#if Setting.lost_password? }
        { link_to l(:label_password_lost), { controller: '/account', action: 'lost_password' } %>
        <br>
      {/each}
      {#if Setting.self_registration? }
        { link_to t(:label_register),
          '',
          title: t(:label_register),
          class: 'registration-modal--activation-link modal-wrapper--activation-link' %>
      {/each}
    </div>
  </div>
{/each}

<section data-augmented-model-wrapper
         data-activation-selector=".registration-modal--activation-link"
         data-modal-class-name="registration-modal modal-wrapper -highlight">
  <% @user ||= User.new %>
  { render partial: '/account/register' %>
</section> -->

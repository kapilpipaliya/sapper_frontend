<script>
import {onMount, onDestroy, createEventDispatcher} from "svelte";
  onMount(() => {
    window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

var dashboardChart1 = document.getElementById("dashboardChart1");
if (dashboardChart1) new Chart(dashboardChart1.getContext('2d'), {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Sales',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var profileChart1 = document.getElementById("profileChart1");
if (profileChart1) new Chart(profileChart1.getContext('2d'), {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [10, 23, 5, 99, 67, 43, 0],
            fill: false,
            pointRadius: 10,
            pointHoverRadius: 15,
            showLine: false // no line shown
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Point Style: ' + 'rectRot'
        },
        legend: {
            display: false
        },
        elements: {
            point: {
                pointStyle: 'rectRot'
            }
        }
    }
});
  });
</script>
<template lang="pug">
.row.border-bottom.bd-lightGray.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Pandora 
      small Version 1.0
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') Dashboard
.m-3
  .row.mt-2
    .cell-lg-3.cell-sm-6.mt-2
      .icon-box.border.bd-cyan
        .icon.bg-cyan.fg-white
          span.mif-cog
        .content.p-4
          .text-upper cpu traffic
          .text-upper.text-bold.text-lead 90%
    .cell-lg-3.cell-sm-6.mt-2
      .icon-box.border.bd-red
        .icon.bg-red.fg-white
          span.mif-google-plus
        .content.p-4
          .text-upper likes
          .text-upper.text-bold.text-lead 41,410
    .cell-lg-3.cell-sm-6.mt-2
      .icon-box.border.bd-green
        .icon.bg-green.fg-white
          span.mif-cart
        .content.p-4
          .text-upper sales
          .text-upper.text-bold.text-lead 1024
    .cell-lg-3.cell-sm-6.mt-2
      .icon-box.border.bd-orange
        .icon.bg-orange.fg-white
          span.mif-users
        .content.p-4
          .text-upper new members
          .text-upper.text-bold.text-lead 3,300
  .row
    .cell-lg-3.cell-md-6.mt-2
      .more-info-box.bg-cyan.fg-white
        .content
          h2.text-bold.mb-0 150
          div New Orders
        .icon
          span.mif-cart
        a.more(href='\#;')
          | More info 
          span.mif-arrow-right
    .cell-lg-3.cell-md-6.mt-2
      .more-info-box.bg-green.fg-white
        .content
          h2.text-bold.mb-0 53%
          div Bounce Rate
        .icon
          span.mif-chart-bars
        a.more(href='\#;')
          | More info 
          span.mif-arrow-right
    .cell-lg-3.cell-md-6.mt-2
      .more-info-box.bg-orange.fg-white
        .content
          h2.text-bold.mb-0 44
          div New Registrations
        .icon
          span.mif-user-plus
        a.more(href='\#;')
          | More info 
          span.mif-arrow-right
    .cell-lg-3.cell-md-6.mt-2
      .more-info-box.bg-red.fg-white
        .content
          h2.text-bold.mb-0 10,000
          div Unique Visitors
        .icon
          span.mif-user-check
        a.more(href='\#;')
          | More info 
          span.mif-arrow-right
  .mt-4(data-role='panel' data-title-caption='Monthly Recap Report' data-collapsible='true' data-title-icon="<span class='mif-chart-line'></span>")
    .row
      .cell-md-8.p-10
        h5.text-center Sales: 1 Jan, 2014 - 30 Jul, 2014
        canvas#dashboardChart1
      .cell-md-4.p-10
        h5.text-center Goal Completion
        .mt-6
          .clear
            .place-left Add Products to Cart
            .place-right
              strong 160
              | /200
          div(data-role='progress' data-value='35' data-cls-bar='bg-cyan')
        .mt-6
          .clear
            .place-left Complete Purchase
            .place-right
              strong 310
              | /400
          div(data-role='progress' data-value='35' data-cls-bar='bg-red')
        .mt-6
          .clear
            .place-left Visit Premium Page
            .place-right
              strong 480
              | /800
          div(data-role='progress' data-value='35')
        .mt-6
          .clear
            .place-left Send Inquiries
            .place-right
              strong 250
              | /500
          div(data-role='progress' data-value='35' data-cls-bar='bg-orange')
        .mt-6
          p.text-small Cum brodium resistere, omnes spatiies perdere varius, magnum lanistaes.
    hr
    .row
      .cell-lg-3.cell-sm-6.text-center.mt-4
        .fg-green
          span.mif-arrow-drop-up
          | 17%
        .text-bold $35,210.43
        .text-upper TOTAL REVENUE
      .cell-lg-3.cell-sm-6.text-center.mt-4
        .fg-orange
          span =
          | 0
        .text-bold $10,390.90
        .text-upper TOTAL COST
      .cell-lg-3.cell-sm-6.text-center.mt-4
        .fg-green
          span.mif-arrow-drop-up
          | 20%
        .text-bold $24,813.53
        .text-upper TOTAL PROFIT
      .cell-lg-3.cell-sm-6.text-center.mt-4
        .fg-red
          span.mif-arrow-drop-down
          | 18%
        .text-bold 1,200
        .text-upper GOAL COMPLETIONS
  .row
    .cell-md-7
      .mt-4(data-role='panel' data-title-caption='Staff salary' data-collapsible='true' data-title-icon="<span class='mif-table'></span>")
        .p-4
          table.table.striped.table-border.mt-4(data-role='table' data-cls-table-top='row' data-cls-search='cell-md-6' data-cls-rows-count='cell-md-6' data-rows='5' data-rows-steps='5, 10' data-show-activity='false' data-source='data/table.json' data-horizontal-scroll='true')
    .cell-md-5
      .mt-4(data-role='panel' data-title-caption='New members' data-collapsible='true' data-title-icon="<span class='mif-users'></span>")
        ul.user-list
          li
            img.avatar(alt='image' src='images/pandora/images/user1-128x128.jpg')
            .text-ellipsis Sergey
            .text-small.text-muted Today
          li
            img.avatar(alt='image' src='images/pandora/images/user2-160x160.jpg')
            .text-ellipsis Alex
            .text-small.text-muted Yesterday
          li
            img.avatar(alt='image' src='images/pandora/images/user3-128x128.jpg')
            .text-ellipsis Norma
            .text-small.text-muted Yesterday
          li
            img.avatar(alt='image' src='images/pandora/images/user4-128x128.jpg')
            .text-ellipsis Katty
            .text-small.text-muted 11 Jan
          li
            img.avatar(alt='image' src='images/pandora/images/user5-128x128.jpg')
            .text-ellipsis Julia
            .text-small.text-muted 11 Jan
          li
            img.avatar(alt='image' src='images/pandora/images/user6-128x128.jpg')
            .text-ellipsis Mark
            .text-small.text-muted 11 Jan
          li
            img.avatar(alt='image' src='images/pandora/images/user7-128x128.jpg')
            .text-ellipsis Marta
            .text-small.text-muted 11 Jan
          li
            img.avatar(alt='image' src='images/pandora/images/user8-128x128.jpg')
            .text-ellipsis Ustas
            .text-small.text-muted 11 Jan
        .p-2.border-top.bd-default.text-center
          a(href='\#;') View all users

</template>

<script>
    // This function not work, as its associated with data-on-before-page attribute
    function masterBeforePage(dir, index){
        var result = {
            val: 0,
            log: []
        };
        var form = J("#master-form");

        if (dir === "next" && index === 0) {

            var field1 = J('#domain_name_1');
            var field2 = J('#domain_name_2');

            field1.parent().removeClass("invalid");
            field2.parent().removeClass("invalid");

            if (parseInt(form[0]['hosting_with_domain'].value) === 0) {
                Metro.validator.validate(field1, result, null, null, true);
            } else {
                Metro.validator.validate(field2, result, null, null, true);
            }

            if (result['log'].length > 0) {
                setTimeout(function(){
                    J.each([field1, field2], function(){
                        var inp  = J(this);
                        if (Metro.validator.is_control(inp)) {
                            inp.parent().removeClass("invalid");
                        } else {
                            inp.removeClass("invalid");
                        }
                    })
                }, 2000);
            }

            return result['log'].length === 0;
        }

        return true;

    }
</script>
<template lang="pug">
.row.m-3
  .cell-md-4.text-center.text-left-md
    h3.dashboard-section-title
      | Master
      small wizards
  .cell-md-8.d-flex.flex-justify-center.flex-justify-end-md
    ul.breadcrumbs.bg-transparent
      li.page-item
        a.page-link(href='\#;')
          span.mif-meter
      li.page-item
        a.page-link(href='\#;') Wizards
      li.page-item
        a.page-link(href='\#;') Master
.p-1.m-3
  .row
    .cell-lg-12
      .bg-white.p-4.h-100
        .d-flex.flex-justify-center.mb-2
          input(type='radio' data-role='radio' name='r1' value='slide' data-caption='slide' checked='' onclick="$('#effect-demo').attr('data-effect', this.value)")
          input(type='radio' data-role='radio' name='r1' value='fade' data-caption='fade' onclick="$('#effect-demo').attr('data-effect', this.value)")
          input(type='radio' data-role='radio' name='r1' value='switch' data-caption='switch' onclick="$('#effect-demo').attr('data-effect', this.value)")
        hr
        #effect-demo(data-role='master' data-control-title='Ordering, step $1 of $2' data-control-prev="<span class='mif-arrow-left'></span>" data-control-next="<span class='mif-arrow-right'></span>")
          .page
            | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          .page
            | It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          .page
            | The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
  br
  .row
    .cell-lg-12
      form#master-form(action='javascript:' data-role='validator')
        #master1(data-role='master' data-control-prev="<span class='mif-arrow-left'></span>" data-control-next="<span class='mif-arrow-right'></span>" data-control-title='Checkout step $1/$2' data-on-before-page='masterBeforePage')
          .page
            select#h_service(name='h_service' data-role='select')
              optgroup(label='Physical servers')
                option(value='dedicatced_1_xeon_silver_ssd') Single Xeon Silver SSD
                option(value='dedicatced_2_xeon_silver_ssd') Dual Xeon Silver SSD
                option(value='dedicatced_smart_1_xeon_silver_ssd') Smart Single Xeon Silver SSD
                option(value='dedicatced_smart_2_xeon_silver_ssd') Smart Dual Xeon Silver SSD
                option(value='dedicated_corei3_hp') Core i3 (hp)
                option(value='dedicated_corei3_hp_ssd') Core i3 (hp) SSD
                option(value='dedicated_corei7_hp_ssd') Core i7 (hp) SSD
                option(value='dedicated_pentium_hp') Pentium (hp)
                option(value='dedicated_pentium_hp_ssd') Pentium (hp) SSD
                option(value='dedicated_smart_corei3_hp') Smart Core i3 (hp)
                option(value='dedicated_smart_corei3_hp_ssd') Smart Core i3 (hp) SSD
                option(value='dedicated_smart_corei7_hp_ssd') Smart Core i7 (hp) SSD
                option(value='dedicated_smart_pentium_hp') Smart Pentium (hp)
                option(value='dedicated_smart_pentium_hp_ssd') Smart Pentium (hp) SSD
                option(value='dedicated_smart_xeon_hp') Smart Xeon (hp)
                option(value='dedicated_smart_xeon_hp_ssd') Smart Xeon (hp) SSD
                option(value='dedicated_smart_xeon_ssd') Smart Xeon SSD
                option(value='dedicated_xeon_hp') Xeon (hp)
                option(value='dedicated_xeon_hp_ssd') Xeon (hp) SSD
                option(value='dedicated_xeon_ssd') Xeon SSD
                option(value='dedicated_xeon') Xeon
                option(value='dedicated_xeon_sata') Xeon SATA
                option(value='dedicated_dual_xeon') Dual Xeon
                option(value='dedicated_dual_xeon_sata') Dual Xeon SATA
                option(value='dedicated_smart_xeon') Smart Xeon
                option(value='dedicated_smart_xeon_sata') Smart Xeon SATA
                option(value='dedicated_smart_dual_xeon') Smart Dual Xeon
                option(value='dedicated_smart_dual_xeon_sata') Smart Dual Xeon SATA
                option(value='colo_new_2u') Colocation 2U
                option(value='colo_new_4u') Colocation 4U
              optgroup(label='Virtual Hosting')
                option(value='mini' selected='selected') Mini
                option(value='site') Site
                option(value='portal') Portal
              optgroup(label='Virtual servers')
                option(value='evps0') eVPS-TEST (30 days)
                option(value='evps1') eVPS-1
                option(value='evps2') eVPS-2
                option(value='evps4') eVPS-4
                option(value='evps8') eVPS-8
                option(value='evps16') eVPS-16
                option(value='evps32') eVPS-32
                option(value='evps64') eVPS-64
                option(value='evps128') eVPS-128
            .d-table.fg-dark.w-100.mt-8.mb-8
              .d-table-row.text-bold.reduce-2.enlarge-md
                .d-table-cell
                .d-table-cell.text-center
                  | Terms
                  br
                  | (months)
                .d-table-cell.text-center
                  | Price
                  br
                  | (month)
                .d-table-cell.text-center
                  | Cost
                  br
                  | (UAH)
              .d-table-row(style='height: 8px;')
              label.d-table-row.reduce-1.enlarge-md
                .p-1.d-table-cell
                  input(name='h_term' value='3' type='radio' data-role='radio' checked='')
                .p-1.d-table-cell.text-center 3
                .p-1.d-table-cell.text-center 115.02
                .p-1.d-table-cell.text-center 345.06
              label.d-table-row.reduce-1.enlarge-md
                .p-1.d-table-cell
                  input(name='h_term' value='6' type='radio' data-role='radio')
                .p-1.d-table-cell.text-center 6
                .p-1.d-table-cell.text-center 98.01
                .p-1.d-table-cell.text-center 588.06
              label.d-table-row.reduce-1.enlarge-md
                .p-1.d-table-cell
                  input(name='h_term' value='12' type='radio' data-role='radio')
                .p-1.d-table-cell.text-center 12
                .p-1.d-table-cell.text-center 86.67
                .p-1.d-table-cell.text-center 1 040.04
            select(name='php_version' data-role='select')
              option(value='72') Version PHP 7.2
              option(value='71' selected='selected') Version PHP 7.1 (recomended)
              option(value='7') Version PHP 7.0
              option(value='56') Version PHP 5.6
              option(value='54') Version PHP 5.4
              option(value='53') Version PHP 5.3
              option(value='5') Version PHP 5.2
            label.d-flex.mt-8.flex-align-start
              input.mt-1(type='radio' name='hosting_with_domain' value='0' checked='' data-role='radio')
              .reduce-1.enlarge-md
                h5 I have a domain
                p.mt-0
                  | Specify an existing domain name that you want to use for your order
            div
              input#domain_name_1(type='text' name='domain_name_1' data-role='input' data-prepend='www.' placeholder='Domain (website address)' data-validate='domain')
              span.invalid_feedback Please specify domain name
            label.d-flex.mt-8.flex-align-start
              input.mt-1(type='radio' name='hosting_with_domain' value='1' data-role='radio')
              .reduce-1.enlarge-md
                h5 Register domain
                p.mt-0
                  | If you do not have a registered domain name. 
                  a.fg-red(href='\#;') Free registration domain name terms
            div
              .row
                .cell-sm-8
                  input#domain_name_2(type='text' name='domain_name_2' data-role='input' data-prepend='www.' placeholder='Domain name' data-validate='pattern=^[a-z0-9а-я]+$')
                  span.invalid_feedback Please specify domain name
                .cell-sm-4.mt-2.mt-0-sm.pl-0-sm
                  select#domain_type.select-domains(name='domain_type' data-role='select')
                    option(value='com') com
                    option(value='net') net
                    option(value='org') org
                    option(value='biz') biz
                    option(value='info') info
                    option(value='ru') ru
                    option(value='com.ua' selected='selected') com.ua
                    option(value='net.ua') net.ua
                    option(value='org.ua') org.ua
                    option(value='kiev.ua') kiev.ua
                    option(value='in.ua') in.ua
                    option(value='cn.ua') cn.ua
                    option(value='crimea.ua') crimea.ua
                    option(value='cv.ua') cv.ua
                    option(value='dn.ua') dn.ua
                    option(value='donetsk.ua') donetsk.ua
                    option(value='dp.ua') dp.ua
                    option(value='if.ua') if.ua
                    option(value='kh.ua') kh.ua
                    option(value='kharkov.ua') kharkov.ua
                    option(value='kherson.ua') kherson.ua
                    option(value='kirovograd.ua') kirovograd.ua
                    option(value='km.ua') km.ua
                    option(value='kr.ua') kr.ua
                    option(value='ks.ua') ks.ua
                    option(value='lg.ua') lg.ua
                    option(value='lugansk.ua') lugansk.ua
                    option(value='lutsk.ua') lutsk.ua
                    option(value='lviv.ua') lviv.ua
                    option(value='mk.ua') mk.ua
                    option(value='nikolaev.ua') nikolaev.ua
                    option(value='od.ua') od.ua
                    option(value='odessa.ua') odessa.ua
                    option(value='pl.ua') pl.ua
                    option(value='poltava.ua') poltava.ua
                    option(value='rovno.ua') rovno.ua
                    option(value='rv.ua') rv.ua
                    option(value='sebastopol.ua') sebastopol.ua
                    option(value='sumy.ua') sumy.ua
                    option(value='te.ua') te.ua
                    option(value='uzhgorod.ua') uzhgorod.ua
                    option(value='vinnica.ua') vinnica.ua
                    option(value='vn.ua') vn.ua
                    option(value='zaporizhzhe.ua') zaporizhzhe.ua
                    option(value='zp.ua') zp.ua
                    option(value='zt.ua') zt.ua
                    option(value='zhitomir.ua') zhitomir.ua
                    option(value='uz.ua') uz.ua
                    option(value='ternopil.ua') ternopil.ua
                    option(value='ivano-frankivsk.ua') ivano-frankivsk.ua
                    option(value='chernovtsy.ua') chernovtsy.ua
                    option(value='yalta.ua') yalta.ua
                    option(value='khmelnitskiy.ua') khmelnitskiy.ua
                    option(value='ck.ua') ck.ua
                    option(value='volyn.ua') volyn.ua
                    option(value='sm.ua') sm.ua
                    option(value='kharkiv.ua') kharkiv.ua
              .text-center.mt-4
                | Terms: 
                span.fg-red 1 year free
          .page
            label.d-flex.mt-8.flex-align-center
              input.mt-1(type='checkbox' checked='' data-role='checkbox' name='ua_resident' value='1')
              .reduce-1-sm
                p.mt-0
                  | Resident of Ukraine (the person registered on the territory of Ukraine)
            label.d-flex.mt-8.flex-align-center
              input.mt-1(type='radio' name='client_type' value='physical' checked='' data-role='radio')
              .reduce-1-sm
                h5 Individual
                hr
                p.mt-0
                  | Payment is one of these methods on our website, provided for individuals.
            label.d-flex.mt-8.flex-align-center
              input.mt-1(type='radio' name='client_type' value='legal' data-role='radio')
              .reduce-1-sm
                h5 Legal entity
                hr
                p.mt-0
                  | Payment is only by means of transfer on the basis of the issued invoice.


</template>
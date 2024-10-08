(()=>{"use strict";function t(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}jQuery((function(a){!function(t){"undefined"!=typeof contact_list_settings&&1==contact_list_settings.focus_on_search_field&&(t("#search-contacts").focus(),t(".contact-list-simple-search-contacts").focus())}(a),function(t){t(".contact-list-ajax-form select").change((function(){var a=t(this).closest("form"),c=a.data("elem-class");t("."+c+" #search-contacts").val(""),t("."+c+" .contact-list-navigation").hide(),t("."+c+" .contact-list-pagination-improved").hide(),t("."+c+" .contact-list-basic-nothing-found").hide(),t("."+c+" .contact-list-basic-contacts-found").hide(),t("."+c+" .contact-list-basic-all-contacts-container #contact-list-search").hide();var n={action:"cl_get_contacts",cl_1:a.find('select[name="cl_1"]').val(),cl_2:a.find('select[name="cl_2"]').val(),cl_3:a.find('select[name="cl_3"]').val(),cl_cat:a.find('select[name="cl_cat"]').val(),cl_atts:a.find('input[name="cl_atts"]').val()};jQuery.post(ajaxurl,n,(function(a){var n=a.replace(/0$/,"");t("."+c+" .contact-list-ajax-results").show(),t("."+c+" .contact-list-ajax-results").empty().append(n);var e="./?"+t("."+c+" .contact-list-ajax-form select").serialize();window.history.pushState({urlPath:e},"",e)}))})),t(".contact-list-search-contacts").keyup((function(){var a,c,n,e,s=t(this).data("elem-class");c=(a=t("."+s+" #search-contacts")).val().toUpperCase(),n=t("."+s+" .contact-list-basic-all-contacts-container #all-contacts li");for(var i=0,l=0,o=0;o<n.length;o++)void 0!==(e=n[o].getElementsByClassName("contact-list-main-elements")[0])&&(e.textContent.toUpperCase().indexOf(c)>-1?(n[o].style.display="",l++):(n[o].style.display="none",i++));""==a.val()?(t("."+s+" .contact-list-basic-all-contacts-container #contact-list-search").hide(),t("."+s+" .contact-list-basic-nothing-found").hide(),t("."+s+" .contact-list-basic-contacts-found").hide(),t("."+s+" .contact-list-navigation").show(),t("."+s+" .contact-list-pagination-improved").show(),t("."+s+" .contact-list-ajax-results").show()):n.length==i?(t("."+s+" .contact-list-basic-all-contacts-container #contact-list-search").hide(),t("."+s+" .contact-list-basic-nothing-found").show(),t("."+s+" .contact-list-basic-contacts-found").hide(),t("."+s+" .contact-list-navigation").hide(),t("."+s+" .contact-list-pagination-improved").hide(),t("."+s+" .contact-list-ajax-results").hide()):(t("."+s+" .contact-list-basic-all-contacts-container #contact-list-search").show(),t("."+s+" .contact-list-basic-nothing-found").hide(),t("."+s+" .contact-list-basic-contacts-found").html(l+" "+(l>1?t("."+s+" .contact-list-text-contacts").html():t("."+s+" .contact-list-text-contact").html())+" "+t("."+s+" .contact-list-text-found").html()+"."),t("."+s+" .contact-list-basic-contacts-found").show(),t("."+s+" .contact-list-navigation").hide(),t("."+s+" .contact-list-pagination-improved").hide(),t("."+s+" .contact-list-ajax-results").hide())}))}(a),function(t){t(".contact-list-simple-search-contacts").keyup((function(){var a,c,n;c=(a=document.getElementsByClassName("contact-list-simple-search-contacts")[0]).value.toUpperCase(),n=t(".contact-list-simple-all-contacts-container .contact-list-simple-list-row-data"),t(".contact-list-simple-list").addClass("contact-list-simple-list-search-active");for(var e=0,s=0,i=0;i<n.length;i++)n[i].textContent.toUpperCase().indexOf(c)>-1?(n[i].style.display="",s++):(n[i].style.display="none",e++);""==a.value?(t(".contact-list-simple-all-contacts-container .contact-list-simple-list-container").hide(),t(".contact-list-simple-paginated-container .contact-list-simple-list-container").show(),t(".contact-list-navigation").show(),t(".contact-list-pagination-improved").show(),t(".contact-list-simple-all-contacts-container .contact-list-simple-nothing-found").hide(),t(".contact-list-simple-all-contacts-container .contact-list-simple-contacts-found").hide()):n.length==e?(t(".contact-list-simple-all-contacts-container .contact-list-simple-list-container").hide(),t(".contact-list-simple-paginated-container .contact-list-simple-list-container").hide(),t(".contact-list-navigation").hide(),t(".contact-list-pagination-improved").hide(),t(".contact-list-simple-all-contacts-container .contact-list-simple-nothing-found").show(),t(".contact-list-simple-all-contacts-container .contact-list-simple-contacts-found").hide()):(t(".contact-list-simple-all-contacts-container .contact-list-simple-list-container").show(),t(".contact-list-simple-paginated-container .contact-list-simple-list-container").hide(),t(".contact-list-navigation").hide(),t(".contact-list-pagination-improved").hide(),t(".contact-list-simple-all-contacts-container .contact-list-simple-nothing-found").hide(),t(".contact-list-simple-all-contacts-container .contact-list-simple-contacts-found").html(s+" "+(s>1?t(".contact-list-simple-text-contacts").html():t(".contact-list-simple-text-contact").html())+" "+t(".contact-list-simple-text-found").html()+"."),t(".contact-list-simple-all-contacts-container .contact-list-simple-contacts-found").show()),t(".contact-list-simple-all-contacts-container .contact-list-simple-list-row-data:visible:even").css("background","#fff"),t(".contact-list-simple-all-contacts-container .contact-list-simple-list-row-data:visible:odd").css("background","rgb(248, 248, 248)")}))}(a),function(t){t(document).on("click",".cl-modal-container-contact",(function(a){if(a.target===this){var c=t(this).data("contact-id");c?t(".cl-modal-container-"+c).hide():t(".cl-modal-container").hide()}})),t(document).on("click",".cl-close-modal",(function(a){a.preventDefault();var c=t(this).data("contact-id");c?t(".cl-modal-container-"+c).hide():t(".cl-modal-container").hide()}))}(a),function(a){a(document).on("click",".contact-list-send-email a",(function(t){t.preventDefault(),a(".contact-list-sender-name").val(""),a(".contact-list-sender-email").val(""),a(".contact-list-recipient").empty().append(a(this).data("name")),a(".contact-list-contact-id").val(a(this).data("id")),a(".contact-list-message").val(""),a(".contact-list-sending-message").empty().append(""),a(".contact-list-message-error").empty().append(""),a(".contact-list-send-single-submit").attr("disabled",!1),a(".cl-modal-container").hide(),a(".cl-modal-container-send-message").show();var c=a(".cl-modal-container-send-message"),n=c.find('a[href]:not(.cl-close-modal), area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]').filter(":visible"),e=n.first(),s=n.last();e.focus(),c.on("keydown",(function(t){"Tab"===t.key&&(t.shiftKey?document.activeElement===e[0]&&(s.focus(),t.preventDefault()):document.activeElement===s[0]&&(e.focus(),t.preventDefault()))}))})),a(".contact-list-send-single").submit((function(c){c.preventDefault();var n,e=this,s=a(this),i=t(e.sender_name.value),l=t(e.sender_email.value),o=t(e.contact_id.value),d=t(e.site_url.value),r=t(e.txt_please_msg_first.value),m=t(e.txt_msg_sent_to.value),p=t(e.txt_sending_please_wait.value),u=t(e.txt_new_msg_from.value),h=t(e.txt_sent_by.value),f=t(e.txt_please_sender_details_first.value),g=parseInt(s.find('input[name="close_modal_in_secs"]').val()),v=u+" "+d,_="",b=e.message.value;if(e.sender_name.value.length<3||(n=e.sender_email.value,!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)))return a(".contact-list-message-error").empty().append(f),!1;if(e.message.value.length<3)return a(".contact-list-message-error").empty().append(r),!1;a(".contact-list-message-error").empty().append(""),e.send_message.disabled=!0,i?_=i:l&&(_=l),i&&(v=u+" "+d+" – "+h+" "+_);var y=".contact-list-sending-message";a(y).empty().append(p);var x={action:"cl_send_mail_public",subject:v,sender_name:i,sender_email:l,body:b,contact_id:o};jQuery.post(ajaxurl,x,(function(t){"OK"==t?(a(y).empty().append("<strong>"+m+"</strong>"),g>0&&setTimeout((function(){a(".cl-modal-container").hide()}),1e3*g)):""==t?a(y).empty().append('<strong style="color: crimson;">ERROR</strong>'):a(y).empty().append('<strong style="color: crimson;">'+t+"</strong>"),a(y).show()}))}))}(a)}))})();
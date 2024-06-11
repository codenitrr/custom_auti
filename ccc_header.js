let custom_auti = { "lang": "nl", "page": "home" };

function log_custom() {
    console.log(custom_auti)
}

$(document).ready(function(log_custom) {
    if ($('.ProductTemplate_Responsive').length = 1) {
        custom_auti.page = "product";
    }
 ]  if   ($('.ShowProductCategoryHolder').length = 1) {
            custom_auti.page = "category";
     }
}
    
$(document).ready(function() {
    let textnl = "3 Willekeurige tangles met korting";
    let textde = "3 Zufällige Verwicklungen mit Rabatt";
    let textfr = "3 Des enchevêtrements aléatoires au rabais";
    switch (custom_auti.lang) {
        case "nl":
            $('select[name="product_attribute[4882851]"] option[value="39487410"]').text(textnl);
            break;
        case "de":
            $('select[name="product_attribute[4882851]"] option[value="39487410"]').text(textde);
            break;
        case "fr":
            $('select[name="product_attribute[4882851]"] option[value="39487410"]').text(textfr);
            break;
    }

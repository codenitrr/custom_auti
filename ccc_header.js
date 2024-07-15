let custom_auti = { "lang": "nl", "page": "home" };

function log_custom() {
    console.log(custom_auti);
}

$(document).ready(function () {
    if ($('.ProductTemplate_Responsive').length === 1) {
        custom_auti.page = "product";
    }
    if ($('.ShowProductCategoryHolder').length === 1) {
        custom_auti.page = "category";
    }
    
    log_custom();
});

$(document).ready(function () {
    let textnl = "3 Willekeurige tangles met korting";
    let textde = "3 Zufällige Verwicklungen mit Rabatt";
    let textfr = "3 Des enchevêtrements aléatoires au rabais";

    function updateOptionText(language, text) {
        $('select[name="product_attribute[4882851]"] option').filter(function () {
            return $(this).val() == "39487410";
        }).text(text);
    }

    switch (custom_auti.lang) {
        case "nl":
            updateOptionText("nl", textnl);
            break;
        case "de":
            updateOptionText("de", textde);
            break;
        case "fr":
            updateOptionText("fr", textfr);
            break;
    }
});


console.log("ccc v2 loaded");

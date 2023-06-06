$(document).ready(function() {
    $("#option1").click(function() {
        $(".wallet").hide();
        $(".walletTwo").hide();
        $(".walletThree").hide();
        $(".q-code").show();
    });

    $("#option2").click(function() {
        $(".q-code").hide();
        $(".walletTwo").hide();
        $(".walletThree").hide();
        $(".wallet").show();
    });

    $(".viewOne").click(function() {
        $(".q-code").hide();
        $(".walletTwo").hide();
        $(".walletThree").hide();
        $(".wallet").show();
    });

    $(".viewTwo").click(function() {
        $(".q-code").hide();
        $(".wallet").hide();
        $(".walletThree").hide();
        $(".walletTwo").show();
    });

    $(".viewThree").click(function() {
        $(".q-code").hide();
        $(".walletTwo").hide();
        $(".wallet").hide();
        $(".walletThree").show();
    });

    $("#modal").click(function() {
        $(".card-wrapper").show();
    });

    $(".close").click(function() {
        $(".card-wrapper").hide();
    });
});
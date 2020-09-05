var $tab_list = $(".tab-menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").
    find(">ul").hide();
}

$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);
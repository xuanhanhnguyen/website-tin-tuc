$(document).ready(function () {
    $(".them_sp").addClass("them");
    xu_ly_thanh_toan();
    login();
    logout();
    admin_login();
    QLnguoidung();
    QLsanpham();
    QLdonhang();
});
// end
$(document).ready(function () {
    count_cart();
    $("#product").load("all_food.php", function () {
        $("#all_food").addClass("click");
        model_view();
        add_cart();
    });
});
// end
$(document).ready(function () {
    $("#all_food").click(function () {
        $("#all_food").addClass("click");
        $("#canned_food,#fresh_food,#frozen_foods").removeClass("click");
        $("#product").load("all_food.php", function () {
            model_view();
            add_cart();
        });
    });
});
// end
$(document).ready(function () {
    $("#fresh_food").click(function () {
        $("#fresh_food").addClass("click");
        $("#canned_food,#all_food,#frozen_foods").removeClass("click");
        $("#product").load("fresh_food.php", function () {
            model_view();
            add_cart();
        });
    });
});
// end
$(document).ready(function () {
    $("#frozen_foods").click(function () {
        $("#frozen_foods").addClass("click");
        $("#canned_food,#all_food,#fresh_food").removeClass("click");
        $("#product").load("frozen_foods.php", function () {
            model_view();
            add_cart();
        });
    });
});
// end
$(document).ready(function () {
    $("#canned_food").click(function () {
        $("#canned_food").addClass("click");
        $("#frozen_foods,#all_food,#fresh_food").removeClass("click");
        $("#product").load("canned_food.php", function () {
            model_view();
            add_cart();
        });
    });
});
//end
$(document).ready(function () {
    $("#btn-cart").click(function () {
        xuly_cart();
        count_cart();
    })
});
//end
//--------------------------------------------------------------------------------
//function(){}
//--------------------------------------------------------------------------------
//xoa nguoi dung
function donhang_xoa() {
    $(".donhang-xoa").click(function () {
        const ma_hd = $(this).attr("ma_hd");
        $.get("php/donhang_xoa.php", {ma_hd: ma_hd}, function () {
            $("#data-admin").load("php/QLdonhang.php", function () {
                donhang_xoa();
            });
        })
    })
}

//xoa nguoi dung
function acc_del() {
    $(".acc-xoa").click(function () {
        const ma_kh = $(this).attr("ma_kh");
        $.get("php/acc_xoa.php", {ma_kh: ma_kh}, function () {
            $("#data-admin").load("php/QLnguoidung.php", function () {
                acc_del();
            });
        })
    })
}

//QLdonhang
function QLdonhang() {
    $("#QLdonhang").click(function () {
        $("#QLdonhang").addClass("click");
        $("#QLnguoidung,#QLsanpham,#QLnhapxuat").removeClass("click");
        $(".them_sp").addClass("them");
        $("#data-admin").load("php/QLdonhang.php",function () {
            donhang_xoa();
        });
    })
}

//QLsanpham
function QLsanpham() {
    $("#QLsanpham").click(function () {
        $("#QLsanpham").addClass("click");
        $("#QLnguoidung,#QLdonhang,#QLnhapxuat").removeClass("click");
        $(".them_sp").removeClass("them");
        $("#data-admin").load("php/QLsanpham.php");
    })
}

//QLnguoidung
function QLnguoidung() {
    $("#QLnguoidung").click(function () {
        $("#QLnguoidung").addClass("click");
        $("#QLsanpham,#QLdonhang,#QLnhapxuat").removeClass("click");
        $(".them_sp").addClass("them");
        $("#data-admin").load("php/QLnguoidung.php", function () {
            acc_del();
        });
    })
}

//admin_login
function admin_login() {
    $("#admin-login").click(function () {
        const username = $("#username").val().trim();
        const password = $("#password").val().trim();
        if (username == '') {
            $("#erro-admin").html("Tài khoản không được để trống !");
            return;
        }
        if (password == '') {
            $("#erro-admin").html("Mật khẩu không được để trống !");
            return;
        }
        if (username !== 'admin' && password !== 'admin') {
            $("#erro-admin").html("Bạn nhâp sai tên hoặc mật khẩu !");
            return;
        }
        $.post("php/admin-login.php", {username: username, password: password}, function (data) {
            if (data == 0) {
                $("#erro-admin").html("Bạn nhâp sai tên hoặc mật khẩu !");
            }
            else {
                window.location = "QLadmin.php";
            }
        });
    })
}

//login
function login() {
    $("#dangky").click(function () {
        $("#xuly-dangky").load("php/dangky.php", function () {
            $(".btn-dangky").click(function () {
                const username = $("#taikhoan").val().trim();
                const password = $("#matkhau").val().trim();
                const fullname = $("#fname").val().trim();
                if (fullname == '') {
                    $("#erro").html("Tên hiển thị không được để trống !");
                    return;
                }
                if (username == '') {
                    $("#erro").html("Tài khoản không được để trống !");
                    return;
                }
                if (password == '') {
                    $("#erro").html("Mật khẩu không được để trống !");
                    return;
                }
                $.post("php/xuly_dangky.php", {
                    username: username,
                    password: password,
                    fullname: fullname
                }, function (data) {
                    if (data == 0) {
                        $("#erro").html("Đăng ký tài khoản thành công !");
                    }
                    else {
                        $("#erro").html("Tài khoản này đã có !");
                    }
                });
            });
            $("#dangnhap").click(function () {
                $("#xuly-dangky").load("php/dangnhap.php", function () {
                    login();
                });
            })
        });
    });
    $(".btn-login").click(function () {
        const username = $("#taikhoan").val().trim();
        const password = $("#matkhau").val().trim();
        if (username == '') {
            $("#erro").html("Tài khoản không được để trống !");
            return;
        }
        if (password == '') {
            $("#erro").html("Mật khẩu không được để trông !");
            return;
        }
        $.post("php/login.php", {username: username, password: password}, function (data) {
            if (data == 0) {
                $("#erro").html("Bạn nhập sai tài khoản hoặc mật khẩu !");
            }
            else {
                location.reload();
            }
        });
    });
}

//
function logout() {
    $(".logout").click(function () {
        $.get("php/logout.php", {}, function () {
            location.reload();
        })
    });
}

//xu ly thanh toan
function xu_ly_thanh_toan() {
    $("#thanh-toan").load("php/load_thanhtoan.php", function () {
        xuly_cart();
        thuc_hien_thanh_toan();
    });
}

function thuc_hien_thanh_toan() {
    $("#btn-TToan").click(function () {
        // language=JQuery-CSS
        if ($("#ten").val() === null || $("#ten").val().trim === '') {
            alert("Bạn chưa nhập \"Tên\" !");
        } else if ($("#ho").val() === null || $("#ho").val().trim() === '') {
            alert("Bạn chưa nhập \"Họ\" !");
        } else if ($("#email").val() === null || $("#email").val().trim() === '') {
            alert("Bạn chưa nhập \"Email\" !");
        } else if ($("#phone").val() === null || $("#phone").val().trim() === '' || isNaN($("#phone").val().trim())) {
            alert("Bạn chưa nhập \"Điện thoại\" hoặc nhập sai \"Điện thoại\" xin vui lòng nhập lại !(lưu ý: \"Điện thoại\" phải là số)");
        } else if ($("#dchi").val() === null || $("#dchi").val().trim() === '') {
            alert("Bạn chưa nhập \"Địa chỉ\" !");
        } else {
            const ten = $("#ten").val().trim();
            const ho = $("#ho").val().trim();
            const email = $("#email").val().trim();
            const dthoai = $("#phone").val().trim();
            const dchi = $("#dchi").val().trim();
            $.post("php/ttoan.php", {ten: ten, ho: ho, email: email, dthoai: dthoai, dchi: dchi}, function (data) {
                if (data == false) {
                    $("#ktra").html("Bạn chưa đăng nhập !");
                } else {
                    alert("Thanh toán \"Thành công\" !");
                    window.location = "product.php";
                }
            });
        }
    });
}

//xu_ly_cart
function xuly_cart() {
    $("#cart").load("php/cart/load_cart.php", function () {
        load_cart();
        del_cart();
    });
}

//count_cart
function count_cart() {
    $("#so-luong").load("php/cart/count_cart.php");
}

//load_cart
function load_cart() {
    $(".sluong").change(function () {
        const ma_sp = $(this).attr("id_sluong");
        let sluong;
        if ($(this).val() === null || $(this).val() === '' || $(this).val() === '0' || $(this).val() === 0) {
            alert("Số lượng mặc định là 1");
            sluong = 1;
        } else {
            sluong = $(this).val();
        }
        $.get("php/cart/xuly_cart.php", {ma_sp: ma_sp, sluong: sluong}, function () {
            xuly_cart();
            xu_ly_thanh_toan();
        });
    });
}

//xoa_cart
function del_cart() {
    $(".btn-del").click(function () {
        const ma_sp = $(this).attr("id_del");
        $.get("php/cart/del_cart.php", {ma_sp: ma_sp}, function () {
            xuly_cart();
            count_cart();
            xu_ly_thanh_toan();
        })
    });
}

//add_cart_model
function btn_cart() {
    $(".btn_cart").click(function () {
        $(this).html("<a href='thanh_toan.php'><i class=\"fas fa-bolt\"></i> Thanh toán</a>");
        $(this).addClass("click");
        const ma_sp = $(this).attr("id_add");
        $.get("php/cart/cart.php", {ma_sp: ma_sp}, function () {
            count_cart();
        });
    });
}

//add_cart_product
function add_cart() {
    $(".add_cart").click(function () {
        $(this).html("<a href='thanh_toan.php'><i class=\"fas fa-bolt\"></i> Thanh toán</a>");
        $(this).addClass("click");
        const ma_sp = $(this).attr("id_add");
        $.get("php/cart/cart.php", {ma_sp: ma_sp}, function () {
            count_cart();
        });
    });
}

//model_view
function model_view() {
    $(".view").click(function () {
        const ma_sp = $(this).attr("id_view");
        $.get("model_detail.php", {ma_sp: ma_sp}, function (data) {
            $("#model_detail").html(data);
            btn_cart();
        });
    });
}


$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        550: {
            items: 2
        },
        770: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});
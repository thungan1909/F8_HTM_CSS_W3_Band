//Hàm toast
function toast ({
    //đối số truyền vào
    title = '',
    message = '', 
    type = '', 
    duration = 0
}) 
    {
    
        const main = document.getElementById('toast');
        if (main) 
        {
            const toast = document.createElement('div');


            //Auto remove toast
            const autoRemoveID = setTimeout(function () {
                main.removeChild(toast);
            },duration + 1000);

            //
            toast.onclick = function (e) {
                if (e.target.closest('.toast__close')) {
                    main.removeChild(toast);
                    clearTimeout(autoRemoveID); //để settimeout kh chạy nữa
                }
            }
            const icons = {
                success: "fas fa-check-circle",
                info: "fas fa-info-circle",
                warning: "fas fa-exclamation-circle",
                error: "fas fa-exclamation-circle"
            };
            const icon = icons[type];
            const delay = (duration/1000).toFixed(2);
            toast.classList.add('toast',`toast--${type}`);
            toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
      

                /* slideIn: trượt vào trong 3s
                fadeOut: làm 1 sau 1s
                độ trễ 3s
                fowardS: ngăn cản lặp lại hành động animation */

            toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">
                   ${title}
                </h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times-circle"></i>
            </div>
            `;
            main.append(toast);
         
        }
    }


function showSuccessToast() {

    toast ({
        title: 'Success',
        message: 'Bạn đã đăng ký thành công tài khoản tại F8.',
        type: 'success',
        duration: 3000
    })
}
function showErrorToast() {
    toast ({
        title: 'Error',
        message: 'Bạn đã đăng ký thất bại. Vui lòng thử lại',
        type: 'error',
        duration: 3000
    })
}
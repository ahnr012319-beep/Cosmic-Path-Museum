document.addEventListener('DOMContentLoaded', () => {
    // --- 1. ロケット（TOPへ戻る）の制御 ---
    const pageTopBtn = document.getElementById('pagetop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            pageTopBtn.classList.add('is-show');
        } else {
            // 発射中（launchingクラスがある時）はis-showを消さない
            if (!pageTopBtn.classList.contains('launching')) {
                pageTopBtn.classList.remove('is-show');
            }
        }
    });

    pageTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        pageTopBtn.classList.add('launching');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setTimeout(() => {
            pageTopBtn.classList.remove('launching');
            pageTopBtn.classList.remove('is-show');
        }, 1000);
    });

    // --- 2. スマホメニュー（画像切り替え）の制御 ---
    const menuBtn = document.getElementById('menu-btn');
    const menuContent = document.querySelector('.header-site-menu');

    // ボタンが存在する場合のみ実行（エラー防止）
    if (menuBtn && menuContent) {
        menuBtn.addEventListener('click', () => {
            // ボタンの画像切り替え用クラス
            menuBtn.classList.toggle('active');
            // メニュー本体の表示/非表示用クラス（CSSのis-activeと合わせます）
            menuContent.classList.toggle('is-active');
        });
    }
});

function changeMonth(id) {
    const months = ['month1', 'month2', 'month3'];
    months.forEach(m => {
        const el = document.getElementById(m);
        if(el) el.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}


$(function(){
    $('.slider').slick({
        dots: false,
        arrows:false,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        pauseOnHover:false,
        pauseOnFocus:false,
      });
});
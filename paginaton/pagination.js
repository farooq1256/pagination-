document.addEventListener('DOMContentLoaded', function() {
    // کل مضامین کی تعداد
    const totalArticles = 100;

    // ہر صفحے پر مضامین کی تعداد
    const articlesPerPage = 20;

    // کل صفحات کی تعداد
    const totalPages = Math.ceil(totalArticles / articlesPerPage);

    // HTML ایلیمنٹس کو حاصل کرنا
    const articlesContainer = document.getElementById('articles');
    const paginationContainer = document.getElementById('pagination');

    // مضامین دکھانے کے لیے فنکشن
    function showArticles(page) {
        articlesContainer.innerHTML = '';

        const start = (page - 1) * articlesPerPage + 1;
        const end = Math.min(page * articlesPerPage, totalArticles);

        for (let i = start; i <= end; i++) {
            const article = document.createElement('div');
            article.innerText = `مضمون ${i}`;
            articlesContainer.appendChild(article);
        }
    }

    // پیجینیشن بٹن بنانے کے لیے فنکشن
    function createPagination() {
        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.innerText = i;
            pageLink.href = '#';
            pageLink.addEventListener('click', function(event) {
                event.preventDefault();
                showArticles(i);
            });
            paginationContainer.appendChild(pageLink);
        }
    }

    // ابتدائی پیجینیشن بٹن بنائیں
    createPagination();

    // ابتدائی طور پر پہلے صفحے کے مضامین دکھائیں
    showArticles(1);
});

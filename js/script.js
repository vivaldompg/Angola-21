
// ==========================================
// ANGOLA 21 - FUNCIONALIDADES PRINCIPAIS
// ==========================================


// 1. MENU PARA TELEMÓVEIS

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        navigation.classList.toggle("active");

        const isOpen = navigation.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );

    });

    navigation.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "Abrir menu");

        });

    });

}


// 2. PESQUISA DAS 21 PROVÍNCIAS

const provinceSearch = document.getElementById("provinceSearch");

const provinceCards = document.querySelectorAll(".province-card");

const noResults = document.getElementById("noResults");

if (provinceSearch) {

    provinceSearch.addEventListener("input", function () {

        const searchText = provinceSearch.value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();

        let visibleCount = 0;

        provinceCards.forEach(function (card) {

            const provinceName = card.textContent
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .trim();

            const found = provinceName.includes(searchText);

            card.style.display = found ? "" : "none";

            if (found) {
                visibleCount++;
            }

        });

        if (noResults) {

            noResults.hidden = visibleCount > 0;

        }

    });

}


// 3. ANO AUTOMÁTICO NO RODAPÉ

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


// 4. VOLTAR AO TOPO

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ==========================================
// FIM DAS FUNCIONALIDADES
// ANGOLA 21
// ==========================================

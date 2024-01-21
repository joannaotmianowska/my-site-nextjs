---
title: 'Odcinek 13 - Jedyny Słuszny Sposób'
date: '2024-01-18'
keywords:
  [
    'programowanie',
    'Jedyny Słuszny Sposób',
    'React',
    'Angular',
    'testy',
    'refactoring',
    'code coverage',
    'programowanie funkcyjne',
    'legacy code',
    'Backbone',
  ]
---

<p>Przeczytałam ostatnio <span class="ml-rte-link-wrapper"><a href="https://buttondown.email/hillelwayne/archive/advice-for-new-software-devs-whove-read-all-those/" target="_blank">odcinek newslettera *Computer Things* Hillela Wayne'a</a></span>&nbsp;z radami dla początkujących programistów i jedna z uwag zatrzymała mnie na dłużej. A było to:
</p>
<blockquote><em><strong>
At some point you will discover the Right Way to program, the thing which makes this all *make sense*, and you'll be convinced that the whole field would be so much better off if everybody else programmed the Right Way, too.</strong></em></blockquote>
<p>W moim wolnym tłumaczeniu:</p>
<p></p>
<blockquote><p><em><strong>W pewnym momencie odkryjesz Jedyny Słuszny Sposób programowania, taki, który sprawia, że w końcu to wszystko ma sens i będziesz przekonanx, że wszyscy by skorzystali, gdyby programowali w Jedyny Słuszny Sposób.</strong><br></em></p></blockquote>
<p></p>
<p>I dalej autor pisze:</p>
<p>
    </p>
<blockquote>
      <p><em><strong>I'm not going to tell you to not get swept up in the Right Way, because that's pretty much impossible. And honestly it feels really great to discover the Right Way and life's too short to not feel good. Just be mindful of the fact you're getting swept up and try not to make your identity the Right Way Guy. Eventually the honeymoon will end and you'll learn that programming is frustrating and messy regardless of which Right Way people use, and that you can also make great software without doing it the Right Way. Over time you'll learn fifty other Right Ways and learn to mix and match them to the problem at hand.</strong></em><br></p>
    </blockquote>
<p></p>
<p>Tłumacząc:</p>
<p>
    </p>
<blockquote>
      <p><em><strong>Nie poradzę ci, by nie dawać się wciągnąć w Jedyny Słuszny Sposób, bo to po prostu niemożliwe. I szczerze mówiąc, odkrycie Jedynego Słusznego Sposobu to naprawdę miłe uczucie, a życie jest za krótkie, żeby nie czuć się dobrze. Zdawaj sobie jednak sprawę z faktu bycia porwanym w Jedyny Słuszny Sposób. W końcu miesiąc miodowy się skończy i zrozumiesz, że programowanie zawsze jest frustrujące i niechlujne, nie ważne, w jaki sposób piszesz. Możliwe jest także pisanie dobrego kodu nie w Jedyny Słuszny Sposób. Z czasem poznasz pięćdziesiąt kolejnych Jedynych Słusznych Sposobów i nauczysz się je dopasowywać i miksować tak, by rozwiązać problem, który masz w danym momencie.</strong></em><br></p>
    </blockquote>
<p></p>
<p><br></p>
<p>Przypomniały mi się momenty, gdy ja odkrywałam Jedyne Słuszne Sposoby. Numer jeden - React jest lepszy od Angulara. Dlaczego WSZYSCY nie piszą frontu w Reakcie? Numer dwa - testy. Dlaczego część kodu NIE MA testów. Dlaczego WSZYSCY nie piszą testów do WSZYSTKIEGO? (No dobra, to nadal uważam za słuszne). Numer trzy - refactoring. Dlaczego ktoś dodał nową funkcjonalność w STARYM kodzie bez PRZEPISYWANIA w nowy sposób? Przecież już wiadomo, że TAK się nie robi, dlaczego utrzymujemy taki STARY kod. Numer cztery - code coverage. Jak w ogóle inni BEZ TEGO funkcjonują? Przecież wystarczyłoby SPRAWDZIĆ pokrycie kodu testami, dopisać brakujące i już. Numer pięć - programowanie funkcyjne. Kod taki krótki, prosty, przyjemny. Dlaczego WSZYSCY tak nie piszą?</p>
<p><br></p>
<p> <strong>Mogę tak wymieniać dalej, bo było tych rzeczy wiele. Pewnie też masz listę takich Jedynych Słusznych Sposobów, jeśli dłużej programujesz. Z czasem odkryłam, że życie programist(k)i nie jest czarno-białe. Nie zawsze da się użyć Jedynego Słusznego Sposobu. Ba, czasem nawet inni uważają, że ten sposób wcale nie jest jedyny. Ani słuszny. A Ty, z bólem serca, przyznajesz im rację. Bo to zależy. Bo specyfika kodu, projektu, wymagań klienta. Bo kod ma przede wszystkim działać, nowy feature ma być dodany i Product Ownera czasem średnio się interesuje faktem, że na dodanie do danego fragmentu testów e2e potrzeba tygodnia (oj, byłam w takim projekcie!).</strong></p>
<p><br></p>
<p>Nie namawiam do pisania złego kodu, nierobienia refactoru czy niepisania testów. Chodzi mi bardziej o to, że nie wszystko zależy od nas i to, że poznaliśmy jakiś nowy sposób na coś i uważamy, że jest fajny i przydatny, nie zawsze oznacza, że trzeba go wszędzie używać.</p>
<p><strong><br></strong></p>
<p><strong>Pamiętam jak na jednej z rozmów kwalifikacyjnych zapytana o to, co zrobiłabym dostając projekt legacy, odpowiedziałam bez wahania "najpierw bym go przepisała na nowszą technologię". Dziś śmieję się z samej siebie. I śmiałam się też dodając potem linijki kodu w Backbonie (if you know, you know). Moje podejście do refactoringu zmieniło się na przestrzeni lat. Zazwyczaj w sumie przestrzegam zasad, które zebrałam <span class="ml-rte-link-wrapper"><a href="https://dev.to/joannaotmianowska/to-refactor-or-not-to-refactor-501n" target="_blank">w tym artykule na dev.to</a></span>. Czy zmienię kiedyś zasady, którymi się kieruję? Pewnie tak.</strong></p>
<p><br></p>
<p> To, czego nauczyło mnie parę lat programowania to przede wszystkim to, że właściwie nie ma sposobów uniwersalnych. Pewnie, możemy stosować pewne zasady, techniki. Jednak kod to wiele zmiennych i jak wchodzimy w istniejący już projekt, nad wieloma tymi zmiennymi nie mamy możliwości panować. Frustrowanie się wtedy, że coś nie jest napisane "po naszemu" nie ma sensu.</p>
<p><br></p>
<p> <strong>Pretekst do rozmyślań na dziś to właśnie Jedyny Słuszny Sposób. Masz swój? Traktujesz go jak biblię? A może są rzeczy, w które kiedyś wierzyłxś, a dziś już nie są aktualne? Bardzo jestem ciekawa, jak do tego podchodzisz! Odpisz na tego maila i pogadajmy&nbsp;✨</strong><br></p>
<p><strong><br></strong></p>
<hr>
<p><strong>🚀&nbsp;A tu mam coś ciekawego...</strong></p>
<p>Dziś zaproszę Cię <span class="ml-rte-link-wrapper"><a href="https://dev.to/joannaotmianowska" target="_blank">do moich technicznych artykułów na dev.to</a></span>&nbsp;- a nuż znajdziesz tam coś dla siebie!</p>
<p><br>Nowych przeglądów treści ostatnio nie było, linkuję poniżej te, które się już pojawiły, może masz do nadrobienia:</p>
<ul><li>&nbsp;<span class="ml-rte-link-wrapper"><a href="https://industrious-boursin-3b3.notion.site/TechWell-1-technologie-rozw-j-i-dobrostan-678d3768003a423da86a2632bb8c0cd9?pvs=4" target="_blank">TechWell #1</a></span></li><li>&nbsp;<a href="https://industrious-boursin-3b3.notion.site/TechWell-2-technologie-rozw-j-i-dobrostan-60ba0c29a9144b7baf32458cf88d56ad?pvs=4" target="_blank">TechWell #2</a></li><li>&nbsp;<a href="https://industrious-boursin-3b3.notion.site/TechWell-3-technologie-rozw-j-i-dobrostan-659cc05b7e4c4a04bb2f567fd1dc9034?pvs=4" target="_blank">TechWell #3</a></li><li>&nbsp;<a href="https://industrious-boursin-3b3.notion.site/TechWell-4-technologie-rozw-j-i-dobrostan-34b3f1f53f60489ba68e38ec9b057729?pvs=4" target="_blank">TechWell #4</a></li></ul>
<p><br></p>
<hr>
<p><strong>🌻&nbsp;Masz ochotę na więcej moich treści?</strong></p>
<p>✨&nbsp;Ten newsletter jest częścią mojego pretekstowego projektu, którego drugą składową stanowi podcast "Pod Pretekstem". Posłuchasz go <span class="ml-rte-link-wrapper"><a href="https://open.spotify.com/show/2clasOw1kmW2Ru0VHwtSyA?si=ddd8a8a7548d4e16" target="_blank">tutaj</a></span>.</p>
<p>✨ Po migawki z mojej codzienności <a href="https://www.instagram.com/joanna.otmianowska/" target="_blank">wskakuj na Instagram</a>.</p>
<p>✨ Programowanie, zmiana branży na IT, wsparcie i motywacja w dziewczyńskim gronie? To wszystko znajdziesz w mojej&nbsp;grupie <span class="ml-rte-link-wrapper"><a href="https://www.facebook.com/groups/programujdziewczyno" target="_blank">"Programuj, dziewczyno!" na FB</a></span> (jest nas już ponad 30 tysięcy!)<br><br><br></p>
<hr>
<p><strong> 💖&nbsp;Lubisz czytać ten newsletter?</strong>&nbsp;</p>
<p>Wesprzyj moje działania: prześlij komuś tego maila, <span class="ml-rte-link-wrapper"><a href="https://www.subscribepage.com/pretekst" target="_blank">link do zapisu na newsletter</a></span> albo <span class="ml-rte-link-wrapper"><a href="https://buycoffee.to/joannaotmianowska" target="_blank">postaw mi kawę</a></span>.&nbsp;Będę ogromnie wdzięczna!<br><strong><br></strong><br></p>
<p><strong>Serdeczne pozdrowienia</strong></p>
<p><strong>Joanna&nbsp;✨</strong><strong><br></strong>&nbsp;<br></p>

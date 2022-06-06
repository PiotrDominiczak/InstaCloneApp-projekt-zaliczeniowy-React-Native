# InstaCloneApp

Aplikacja imitująca Instagram.
Aplikacja działa na iOS i Android.
Dla pobrania zdjęć zostało wykorzystane źródło danych JSONPlaceholder(https://jsonplaceholder.typicode.com/photos).

## Header:

Logo, zamockowane ikony: strzałka w dół, plus, serce, samolot imitujące wygląd instagram.

## Nawigacja:

Możliwość przejścia z ekranu „NewsFeed” do ekranu „Search” za pomocą Bottom Tab Navigatora.

Ekran News Feed:
Lista zdjęć możliwych do przewijania góra-dół.
Pojedyncza karta zdjęcia posiada:

-   logo powtarzane dla co piątego zdjęcia,
-   unikalny tytuł, źródło: https://jsonplaceholder.typicode.com/photos, dla lepszego wyglądu pierwsza litera każdego tytułu jest zmieniana na wielką literę,
-   zjdęcie, źródło: https://jsonplaceholder.typicode.com/photos,
-   imitacja przycisku "Kup teraz" wraz z ikoną strzałki imitującej przejście do kolejnego ekranu,
-   zamockowane ikony: serce, chmurka, samolot, imitujące wygląd instagram
-   zamockowany licznik wyświetleń będący na przemian liczbą 6 i 7 cyfrową,
-   zamockowany komentarz z wykorzystaniem Khaled ipsum, powtarzalny dla co dziesiątego zdjęcia

## Ekran Search:

Input imitujący wyszukiwarkę, wyszukiwanie nie zostało zaimplementowane.
Lista zdjęć w formie siatki, w trzech kolumnach, możliwych do przewijania góra-dół.
Naciśnięcie dowolnego zdjęcia powoduje powiększenie go na pełny ekran, powrót do listy zdjęć poprzez powtórne nacisnięcie zdjęcia lub przeciągnięcie go do góry lub w dół.

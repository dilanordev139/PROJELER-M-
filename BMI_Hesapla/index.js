// Form elemanını yakalar (submit olayını dinlemek için)
const bmiForm = document.getElementById("bmi-form");
// Boy giriş kutusunu (input) seçer
const heightInput = document.getElementById("height");
// Kilo giriş kutusunu (input) seçer
const weightInput = document.getElementById("weight");
// Sayısal sonucun yazdırılacağı span etiketini seçer
const bmiResultEl = document.getElementById("bmi-result");
// Kilo durumunun (Zayıf, Normal vb.) yazılacağı rozet etiketini seçer
const weightConditionEl = document.getElementById("weight-condition");
// Hata mesajlarının gösterileceği uyarı kutusunu seçer
const errorMessageEl = document.getElementById("error-message");
// Sonuçların bulunduğu kapsayıcı kart bölümünü seçer
const resultBox = document.getElementById("result-box");

/**
 * VKİ değerine göre kategori metnini ve uygulanacak CSS sınıfını döndüren yardımcı nesne
 * Dünya Sağlık Örgütü (WHO) standart aralıklarını baz alır.
 */
function getBMICategory(bmi) {
  // 18.5 altındaki değerler Zayıf kategorisindedir
  if (bmi < 18.5) {
    return { text: "Zayıf", badgeClass: "badge-underweight" };
  }
  // 18.5 ile 24.9 arasındaki değerler Normal/İdeal kilodur
  if (bmi <= 24.9) {
    return { text: "Normal (İdeal)", badgeClass: "badge-normal" };
  }
  // 25.0 ile 29.9 arasındaki değerler Fazla Kilolu kategorisindedir
  if (bmi <= 29.9) {
    return { text: "Fazla Kilolu", badgeClass: "badge-overweight" };
  }
  // 30 ve üzeri değerler Obezite kategorisindedir
  return { text: "Obezite", badgeClass: "badge-obese" };
}

/**
 * Kullanıcı girdilerini doğrulayan (validation) fonksiyon
 * Geçerli ise sayısal değerleri, geçersiz ise hata mesajını döner
 */
function validateInputs(heightRaw, weightRaw) {
  // Girdileri kayan noktalı sayıya (float) dönüştürür
  const height = parseFloat(heightRaw);
  const weight = parseFloat(weightRaw);

  // Değerlerden biri boşsa veya sayı değilse hata ver
  if (isNaN(height) || isNaN(weight)) {
    return { isValid: false, message: "Lütfen hem boy hem de kilo değerini eksiksiz girin." };
  }

  // Boy için mantıksal sınır kontrolü (50 cm ile 250 cm arası)
  if (height < 50 || height > 250) {
    return { isValid: false, message: "Lütfen geçerli bir boy girin (50 - 250 cm arası)." };
  }

  // Kilo için mantıksal sınır kontrolü (20 kg ile 300 kg arası)
  if (weight < 20 || weight > 300) {
    return { isValid: false, message: "Lütfen geçerli bir kilo girin (20 - 300 kg arası)." };
  }

  // Tüm doğrulamalar başarılıysa parse edilmiş sayıları döner
  return { isValid: true, height, weight };
}

/**
 * Hesaplama ve Arayüz Güncelleme Ana Fonksiyonu
 */
function handleBMICalculation(event) {
  // Form gönderildiğinde sayfanın yeniden yüklenmesini (refresh) engeller
  event.preventDefault();

  // Önceki hata mesajını temizler
  errorMessageEl.textContent = "";

  // Kullanıcının girdiği değerleri doğrulamaya gönderir
  const validation = validateInputs(heightInput.value, weightInput.value);

  // Eğer girişler geçersizse
  if (!validation.isValid) {
    // Hata mesajını ekrana yazar
    errorMessageEl.textContent = validation.message;
    // Hata durumunda sonuç kutusunu gizler
    resultBox.classList.add("is-hidden");
    return;
  }

  // Boyu santimetreden metreye çevirir (örn: 175 cm -> 1.75 m)
  const heightInMeters = validation.height / 100;
  // VKİ formülünü uygular: Kilo / (Boy * Boy)
  const bmiValue = validation.weight / (heightInMeters * heightInMeters);

  // Sonucu virgülden sonra 1 basamak olacak şekilde yuvarlar (örn: 22.8)
  const formattedBMI = bmiValue.toFixed(1);

  // VKİ değerine karşılık gelen Türkçe başlığı ve stil sınıfını alır
  const category = getBMICategory(bmiValue);

  // Sayısal sonucu ekrandaki büyük göstergeye yazar
  bmiResultEl.textContent = formattedBMI;
  // Durum rozetine Türkçe kategoriyi yazar
  weightConditionEl.textContent = category.text;

  // Rozetin önceki renk sınıflarını temizler
  weightConditionEl.className = "badge";
  // Kategoriye uygun yeni renk sınıfını ekler (örn: badge-normal)
  weightConditionEl.classList.add(category.badgeClass);

  // Sonuç kutusunun gizlilik sınıfını kaldırarak ekranda görünmesini sağlar
  resultBox.classList.remove("is-hidden");
}

// Form submit edildiğinde (ister butona basılsın, ister Enter'a basılsın) fonksiyonu çalıştırır
bmiForm.addEventListener("submit", handleBMICalculation);

// Kullanıcı girdileri değiştirmeye başladığında varsa hata mesajını anında temizler
[heightInput, weightInput].forEach((input) => {
  input.addEventListener("input", () => {
    errorMessageEl.textContent = "";
  });
});
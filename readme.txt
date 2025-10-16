const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!formRef.current) return;

  try {
    const formData = new FormData(formRef.current);
    const file = formData.get("attachment") as File;

    // 1️⃣ Upload fajla u Firebase Storage
    const storageRef = ref(storage, `applications/${file.name}`);
    await uploadBytes(storageRef, file);

    // 2️⃣ Uzmi download link
    const fileURL = await getDownloadURL(storageRef);

    // 3️⃣ Dodaj ga kao skriveno polje u formu (da EmailJS vidi)
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "file_url";
    hiddenInput.value = fileURL;
    formRef.current.appendChild(hiddenInput);

    // 4️⃣ Pošalji EmailJS formu
    await emailjs.sendForm(
      "service_sqzeaxu",
      "template_fs0qvel",
      formRef.current,
      "66z6YyCaQIJcC0X2G"
    );

    alert("✅ Application submitted successfully!");
    formRef.current.reset();
  } catch (error) {
    console.error(error);
    alert("❌ Error sending application. Please try again.");
  }
};




ovo u formu treba da se ubaci

import { storage } from "@/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


ovo treba u rules da se ubaci kada se formira database 

rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
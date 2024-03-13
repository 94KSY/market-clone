const form = document.querySelector("#login-form");

let accessToken = null;

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });
  const data = await res.json();
  const accessToken = data.access_tokent;
  window.localStorage.setItem("token", accessToken);
  alert("로그인 되었습니다");
  window.location.pathname = "/";

  const btn = document.createElement("button");
  btn.innerText = "상품 가져오기";
  btn.addEventListener("click", async () => {
    const res = await fetch("/items", {
      headers: {
        // 우리가 로그인할 때 로그인 후 연결을 끊어서 우리가 누군지 모르니 토큰을 보내줌
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await res.json();
  });
  infoDiv.appendChild(btn);
};

form.addEventListener("submit", handleSubmit);

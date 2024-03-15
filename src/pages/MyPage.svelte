<script>
  import Nav from "../components/Nav.svelte";
  import { user$ } from "../store";

  const logout = () => {
    user$.set(null); //유저정보랑
    localStorage.removeItem("token"); //토큰값 초기화 시키면 로그아웃
  };
</script>

<div>나의 당근</div>
<button on:click={logout}>로그아웃</button>
<Nav location="my" />

<style>
  button {
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
</style>

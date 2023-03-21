import UserGuard from "guards/user-guard";

const Mypage = () => {
  return (
    <UserGuard>
      <p>ログイン中の人しか見れないページ</p>
    </UserGuard>
  );
};

export default Mypage;
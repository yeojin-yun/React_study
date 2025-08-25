function ConditionFirst({ isLoggedIn }) {
  return (
    <div>
      <p>if문을 사용한 조건부 렌더링</p>
      <p>{isLoggedIn ? "로그인 되었습니다" : "로그아웃 되었습니다."}</p>
    </div>
  );
}

export default ConditionFirst;

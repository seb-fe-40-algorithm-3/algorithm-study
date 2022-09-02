# algorithm-study

_with CodeStates 40th 스터디 카페_

<br/>

> 이 저장소는 알고리즘 소모임 3조의 `알고리즘 스터디`를 위한 공간입니다.<br/>

<br/>

## ✅ 스터디 진행 방향

- 매주 금요일 자정까지 정해진 분량의 알고리즘을 풀고 PR(Pull Request)을 남깁니다.
  - 매주 월요일 알고리즘 소모임 가이드 일정 후 merge 하겠습니다.
  - `논의 후 수정될 수 있습니다.`
- 스터디는
  - 본 저장소(스터디 repository. 이하 <u>**중앙 저장소**</u>)와
  - 각 개인의 계정으로 fork한 원격 저장소(<u>**본인의 원격 저장소**</u>),
  - <u>**로컬 저장소**</u>에서 진행됩니다.
- 모든 코드 기여자는 각 개인의 **로컬 저장소**에서 개발한 내용을 **본인의 원격 저장소**로 push하고 이 내용을 **중앙 저장소**에 PR합니다.
- 다른 스터디원의 PR 내용을 보고 자유롭게 comment(코드 리뷰)를 남겨주세요!😃

<br/>

## ✅ 참여 방법

1. 중앙 저장소를 나의 깃허브 계정에 fork 한다.
2. 로컬 저장소에 본인의 원격 저장소를 clone 한다.

   ```bash
   $ git clone 본인의 원격 저장소 URL
   ```

3. PR이 반영되어 변경된 중앙 저장소의 내용을 각 개인의 로컬 저장소에 받아 올 수 있어야 하므로 중앙 저장소도 로컬에 연결한다.

   - `2.`에서 clone한 본인의 원격 저장소에는 자동으로 `origin`이라는 이름이 부여되었습니다.
   - 중앙원격저장소를 `upstream`이란 이름으로 추가합니다.

     ```bash
     $ git remote add upstream https://github.com/seb-fe-40-algorithm-3/baekjoon-algorithm-study.git

     ## git 리모트 url 보기
     $ git remote -v
     ```

4. 스터디 진행 주차로 브랜치 생성한 후 생성한 브랜치로 이동

   ```bash
   ## 1주차일 경우
   $ git checkout -b feature/1주차
   ## n주차일 경우
   $ git checkout -b feature/n주차
   ```

5. 이동한 브랜치에서 프로젝트 작업을 시작한다.

   - `n주차` 폴더 생성
   - `n주차` 폴더 하위에 자신의 이름으로 폴더를 생성하고 폴더 내에 소스코드를 작성한다. (`🚫 타인의 소스를 절대로!! 수정하지 않습니다.`)

     ```plaintext
     예) baekjoon-online-judge > 2주차 > 김진희 > 01_1330.js
     ```

   - 조장은 `n주차` 폴더 안에 `n주차.md`파일도 생성하여 작성한다.

     - `1주차.md`

       ```plaintext
       # 입출력과 사칙연산

       입력, 출력과 사칙연산을 연습해 봅시다. Hello World! (총 15문제)
       ```

6. 작성된 내용을 본인의 원격 저장소로 push 한다.

   ```bash
   $ git add .
   $ git commit -m "커밋 메시지" # 커밋 컨벤션에 대해 생각해봅시다!
   $ git push origin feature/n주차
   ```

7. PR을 날린다.🕊

   - 본인의 원격 저장소 깃허브 페이지에서
   - push한 브랜치를 선택하여
   - 중앙 저장소의 `main` 브랜치에 Pull Request 합니다.
     - `PR 컨벤션에 대해서도 생각해 봅시다!`

8. 자유롭게 코드리뷰를 한다.

   - `방식, 기간에 대한 논의 필요`

9. PR이 merge된 후 중앙 저장소에 있는 다른 기여자의 소스코드를 본인 원격 저장소에 가져오고 싶은 경우

   ```bash
   $ git checkout main
   $ git pull upstream main
   ```

   - 이후 4번 과정부터 반복하여 진행

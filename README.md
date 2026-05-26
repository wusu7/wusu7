# 최우수 | Backend Developer

> 사용자가 보는 신청, 주문, 결제, 마이페이지 상태가 서로 다르게 보이지 않도록  
> 백엔드의 상태 기준과 API 응답 구조를 정리하는 개발자입니다.

Java/Spring Boot 기반으로 REST API를 개발하며,  
단순 기능 구현보다 **서비스 흐름이 끝까지 일관되게 동작하는 구조**를 만드는 데 관심이 있습니다.

대표 프로젝트 **On-Race**에서는 마라톤 신청 서비스의  
주문/결제 정합성, 마이페이지 API 계약, 주소 정책, 상태 노출 정책을 개선했습니다.

---

## Backend Focus

- Java / Spring Boot 기반 REST API 개발
- MySQL / Redis 기반 데이터 흐름 이해
- 주문, 신청, 결제, 마이페이지 상태 정합성 개선
- API 응답 구조와 DTO 정리
- AWS EC2, Nginx, Jenkins 기반 운영 문서화
- PR 단위 협업 및 테스트 결과 정리

---

## Tech Stack

### Backend
![Java](https://img.shields.io/badge/Java-17-007396?style=flat-square&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=flat-square&logo=springsecurity&logoColor=white)
![JPA](https://img.shields.io/badge/JPA-Hibernate-59666C?style=flat-square&logo=hibernate&logoColor=white)

### Database / Cache
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)

### Infra / DevOps
![AWS EC2](https://img.shields.io/badge/AWS_EC2-FF9900?style=flat-square&logo=amazonec2&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

### Frontend Experience
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)

---

## Main Project

### On-Race | 마라톤 신청 및 주문/결제 서비스

팀 프로젝트에서 백엔드 개발자로 참여했습니다.  
사용자가 마라톤을 신청하고, 결제하고, 마이페이지에서 상태를 확인하는 흐름에서  
신청 정보와 주문/결제 상태가 서로 다르게 보이지 않도록 백엔드 기준을 정리했습니다.

#### 주요 기여

- `Order.entryId` 저장으로 주문과 신청을 직접 연결
- signed prepare token 검증으로 checkout 요청 변조 및 재사용 위험 감소
- `POST /orders/{orderNumber}/confirm` API 추가
- `/mypage/account` API 재구성
- 기본배송지 자동 승격 정책 정리
- 개인정보가 로그에 남지 않도록 PII 로그 제거
- FAILED / EXPIRED 주문의 마이페이지 노출 정책 정리
- 운영 SQL 및 서버 실행/재시작 문서화

#### 핵심 문제 해결

| 영역 | 문제 | 해결 |
|---|---|---|
| 주문/결제 정합성 | 결제 준비 정보와 실제 결제 요청이 달라질 수 있음 | signed prepare token, `Order.entryId`, confirm API 도입 |
| 마이페이지 API | 계정, 주소, 주문 상태가 한 화면에서 일관되게 보여야 함 | `/mypage/account` 응답 구조 재정리 |
| 주소 정책 | 기본배송지 해제/삭제 이후 기준이 불명확함 | 최신 배송지 자동 승격 정책 적용 |
| 상태 노출 정책 | 실패/만료 주문이 신청내역에 다시 보일 수 있음 | FAILED / EXPIRED 노출 정책 정리 |

---

## Other Projects

### Spring Backend Project

Spring Boot 기반 인증 기능과 운영 환경을 다뤘습니다.

- SMTP 이메일 인증 기능 구현
- Redis TTL 기반 인증 코드 저장 및 검증
- Spring Security 인증 예외 경로 설정
- Jenkinsfile 빌드 흐름 조정
- Swagger 문서화
- AWS EC2, RDS, Nginx 운영 기록 정리

### Codeverse

Next.js와 Docker Compose 기반 프로젝트에서 채팅 기능 통합과 배포 환경 안정화 작업을 수행했습니다.

- Firebase 기반 채팅 기능 통합
- 관리자 채팅 페이지 및 사용자 채팅 위젯 추가
- Docker Compose 환경변수/API 경로 정리
- DB healthcheck 및 migration 실행 흐름 정리

---

## What I Care About

저는 기능을 빠르게 추가하는 것만큼,  
그 기능이 실제 서비스 흐름 안에서 **일관되게 동작하는지**를 중요하게 생각합니다.

특히 주문, 결제, 신청, 마이페이지처럼 여러 기능이 연결되는 영역에서는  
데이터가 서로 다르게 보이지 않도록 상태 기준을 명확히 정리하는 것이 중요하다고 생각합니다.

비전공자로 시작했기 때문에 처음부터 모든 개념을 완벽히 알고 있지는 않았지만,  
사용자 흐름을 따라가며 문제를 이해하고, 그 기준을 코드와 API, 테스트, 문서로 남기는 방식으로 성장하고 있습니다.

---

## Links

- GitHub: https://github.com/wusu7
- Email: chldntn7@gmail.com

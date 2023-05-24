// 게시글 인터페이스
export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}
// 게시글 상태 설정 인터페이스 연결
export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

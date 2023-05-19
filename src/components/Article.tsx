import { calculateTimePassed } from "../utils/calculateTimePassed";

const Article = ({ data }: { data: any }) => {
  const createdAt = calculateTimePassed(data.createdAt);

  return (
    <article className="py-4 mx-4 border-b flex flex-col gap-2">
      <div className="text-sm flex items-center">
        <div className="mr-2">
          <svg
            viewBox="0 0 40 40"
            focusable="false"
            width="16"
            height="16"
            role="img"
            aria-hidden="true"
          >
            <title>女</title>
            <path fill="#F48FB1" d="M40 20a20 20 0 1 1-40 0 20 20 0 0 1 40 0"></path>
            <path
              fill="#CB3A6B"
              d="M28.7 17.5a9.6 9.6 0 0 0-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 0 0-.7 1.1v.1a4.2 4.2 0 0 0-.4.8l-1.3 3.8a20 20 0 0 0 10.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 0 0-.2-3c.1-1 .2-2.2 0-3.3z"
            ></path>
          </svg>
        </div>
        <div className="mr-[10px] opacity-50">
          {data.forumName}
          {data.school && "・" + data.school}
          {createdAt.days ? "・" + createdAt.days + " 天前" : "・" + createdAt.hours + " 小時前"}
        </div>
      </div>
      <div className="flex">
        <div className="truncate grow flex flex-col gap-1">
          <h2 className="text-lg font-bold truncate">{data.title}</h2>

          {data.replyTitle ? (
            <div className="text-sm text-black/60 truncate border-l-4 pl-1">{data.replyTitle}</div>
          ) : data.excerpt ? (
            <div className="text-sm text-black truncate">{data.excerpt}</div>
          ) : data.mediaMeta[1].type === "video/megapx" ? (
            <video
              controls
              muted
              autoPlay
              playsInline
              src={`${data.mediaMeta[1].url}`}
              className="text-sm text-black truncate rounded-md"
            />
          ) : (
            "ph"
          )}

          <div className="flex text-sm">
            <div className="pr-4 flex items-center">
              <img
                title="愛心"
                alt="愛心"
                srcSet="https://megapx.dcard.tw/v1/images/d2e780b7-fdaf-4abd-b33e-00a949018402/responsive?width=16 1x, https://megapx.dcard.tw/v1/images/d2e780b7-fdaf-4abd-b33e-00a949018402/responsive?width=32 2x"
                src="https://megapx.dcard.tw/v1/images/d2e780b7-fdaf-4abd-b33e-00a949018402/responsive?width=32"
                decoding="async"
                data-nimg="intrinsic"
                className="h-4 w-4"
              />
              <div className="pl-[6px] text-black/[35%]">{data.likeCount}</div>
            </div>
            <div className="pr-4 flex">
              <svg
                className="h-5 w-5 mr-[6px]"
                fill="#3397cf"
                viewBox="0 0 24 24"
                focusable="false"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M1.333 12a10.667 10.667 0 1 0 21.334 0 10.667 10.667 0 1 0-21.334 0zM15.5 6.5h-7A3.5 3.5 0 0 0 5 10v3.5A3.5 3.5 0 0 0 8.5 17H9v1.369a.75.75 0 0 0 1.238.57L12.5 17h3a3.5 3.5 0 0 0 3.5-3.5V10a3.5 3.5 0 0 0-3.5-3.5Z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <div className="text-black/[35%]">{data.commentCount}</div>
            </div>
            <div className="flex  opacity-40">
              <svg
                className="h-5 w-5 mr-[6px]"
                fill="#e1e1e1"
                viewBox="0 0 24 24"
                focusable="false"
                role="img"
                aria-hidden="true"
              >
                <path d="M17.65 21.39 12 17.5l-5.65 3.88A1.5 1.5 0 0 1 4 20.15V5a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 5v15.15a1.5 1.5 0 0 1-2.35 1.24z"></path>
              </svg>
              收藏
            </div>
          </div>
        </div>

        {data.mediaMeta[0]?.thumbnail && !(data.mediaMeta[1].type === "video/megapx") && (
          <div className="flex min-w-fit items-end ml-4">
            <img
              className="h-[70px] w-[70px] rounded-xl shadow object-cover"
              src={data.mediaMeta[0]?.thumbnail}
            />
          </div>
        )}
      </div>
    </article>
  );
};
export default Article;

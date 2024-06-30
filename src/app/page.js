import Counter from "@/components/Counter/Counter";
import MessageFromChairman from "@/components/Message/MessageFromChairman";
import NoticeNews from "@/components/NoticeNews/NoticeNews";
import VisionMission from "@/components/VisionMission/VisionMission";

export default function Home() {
  return (
    <main>
      <div className="container">
        <h2>CSECU Webserver is live!</h2>
        <a href="http://api.bike-csecu.com" target="_blank">
          CSECU Webserver Documentation
        </a>

        <h2>Subsystems implemented!</h2>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">
            <a href="https://affsm.bike-csecu.com">
              Academic Form-Fillup System <em>Modernized</em> (AFFSM)
            </a>
          </li>
        </ol>
      </div>
      <MessageFromChairman />
      <VisionMission />
      <NoticeNews />
      <Counter />
    </main>
  );
}

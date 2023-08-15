import "./message.css";
import { format } from "timeago.js";

export default function Message({ message, own }) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    src="https://1.bp.blogspot.com/-iCnFX7eWVjs/XR9NQutHXcI/AAAAAAAAJ9k/ISWH3UXgJF8QJdsV6P9wh3agzOwOF_aYgCLcBGAs/s1600/cat-1285634_1920.png"
                    alt=""
                    className="messageImg"
                />
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}

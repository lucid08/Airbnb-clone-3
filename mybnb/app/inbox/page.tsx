import Conversation from "../components/inbox/Conversation";

const MyInboxPage = () => {
    return (
      <div className="max-w-[1500] mx-auto px-6 pb-6 space-y-4">
        <h1 className="mb-6 text-2xl">Inbox</h1>
            <Conversation/>
            <Conversation/>
            <Conversation/>
        
        </div>
    )
}

export default MyInboxPage;
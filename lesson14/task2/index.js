/*  const createMessanger=() =>{}; */
 function createMessanger() {
    let sender = 'Gromcode';
    let message = 'Just learn it!';

    function sendMessage(name) {
        console.log(`${name}, ${message} Your ${sender}`);
    }

    function setMessage(text) {
        message = text;
    }

    function setSender(sender2) {
        sender = sender2;
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    }
}
const messanger = createMessanger();
messanger.sendMessage("Bob");
messanger.setMessage("Good job!");
messanger.setSender("Gromcode");
/* const r = createMessenger();
r.sendMessage("Bob");
r.setMessage("Good job!");
 r.setSender("g");
 r.sendMessage("Bob");
 */
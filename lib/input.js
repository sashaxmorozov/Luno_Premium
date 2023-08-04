import PromptSync from "prompt-sync";

export async function getUserInput() {
    const prompt = PromptSync();
    try {
        var userPrompt = prompt('Please, enter ticker name: ');
        if (isNaN(+userPrompt) === true) {
            if (userPrompt === 'BTC' || userPrompt === 'XBT') {
                var userTicker = { lunoTicker: 'XBT', binanceTicker: 'BTC' };
                return userTicker;
            } else {
                
                return { lunoTicker: userPrompt, binanceTicker: userPrompt };
            }
        } else {
            throw "Input error";
        }
    } catch (err) {
        if (err === "Input error") {
            return "Invalid input, please enter a valid ticker name";
        }
        throw err;
    }
};




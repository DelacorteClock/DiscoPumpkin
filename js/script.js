//Allow users to select values in the future
//modeSelect('Clothing','Inventory','clothing item','#6E3219');
//modeSelect('Vehicle','Index','vehicle','#B933AD');
//modeSelect('Skyscraper','Inventory','skyscraper','#5E9732');
templateModeSelect('StandardGroup', '#CE8E00');

//SUPPLEMENTARY CONTENT: ADAPT IN FUTURE
function modeSelect(mode, style, item, tCol1) {
    //Name the list
    listName = mode + style;
    //Name the page
    $('.page-title').text(listName);
    //Type instructions
    var instruction = $(`<p>Double click a ${item} to make a line through it, click 'x' to delete the ${item} or drag the ${item}s to reorder them.</p>`);
    $('#instruction-container').append(instruction);
    //Set page background colour and main text colour
    $('body').attr('style', `background-color: ${tCol1}`);
}

function templateModeSelect(mode, tCol1) {
    //Name the list
    listName = mode;
    //Name the page
    $('.page-title').text(listName);
    //Type instructions
    var instruction = $(`<p id='replacewithclothing'>Congratulations!!! Please type a biography of yourself so that StandardGroup can publish information about this year's clothing collection winner!</p>`);
    $('#instruction-container').append(instruction);
    //Set page background colour and main text colour
    $('body').attr('style', `background-color: ${tCol1}`);
}

//ACTUAL PROJECT
function newItem() {
    //Translated initial variables
    var currentLine = $('<li></li>');
    var inputValue = $('#input').val();
    //Give input value to current line
    currentLine.append(inputValue);
    //Check if inputted string is empty
    if (!inputValue) {
        alert('NO DESTINATION INPUTTED');
    } else {
        $('#list').append(currentLine);
    }
    //Make text decoration line
    function makeStrike() {
        currentLine.toggleClass('strike');
    }
    currentLine.on('dblclick', makeStrike);
    //Make a remove button
    var removeButton = $('<button-remove></button-remove>');
    removeButton.append(document.createTextNode('X'));
    currentLine.append(removeButton);
    //Make remove button work
    function deleteLine() {
        currentLine.addClass('delete');
    }
    removeButton.on('click', deleteLine);
    //Make list draggable
    $('#list').sortable();
}

function buildTemplate() {
    var inputtedKeys = $('#template-input').val();
}

function frighten() {
    document.getElementById('tone').play();
    $('*').attr('style', `font-family: 'comic sans ms' !important; background-color: #00F000; color: #0000FF; animation: flash 0.33s infinite`);
    $('a').each(function () {
        window.open($(this).attr('href'));
    });
}

$('body').on('mousemove', frighten);
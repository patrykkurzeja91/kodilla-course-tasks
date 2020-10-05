$(document).ready(function () {

    function randomString() {
        var char = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ',
            str = '';
        for (let i = 0; i < 10; i++) {
            str += char[Math.floor(Math.random() * char.length)];
        }
        return str;
    }
    //board creation
    var board = {
        name: 'Kanban Board',
        addColumn: function (column) {
            this.$element.append(column.$element);
            initSortable();
        },
        $element: $('#board .column-container'),
    };
  var $columnInput= $('.add-column-input')
    function initSortable() {
        $('.column-card-list').sortable({
            connectWith: '.column-card-list',
            placeholder: 'card-placeholder'
        }).disableSelection();
        $('.column-container').sortable({
            connectWith: '.column',
            placeholder: 'column-placeholder'
        }).disableSelection();
    }
    
    $('.create-column').click(function (e) {
        e.preventDefault();
        var name = $columnInput.val();
        if (name == '') {
            
        } else {
            var column = new Column(name);
            board.addColumn(column);
            $columnInput.val('');
            removeClassActive();
        }
    });
    $columnInput.keypress(function (e) {
        var name = $columnInput.val();
        if (name == '') {
            
        } else if (e.which === 13) {
            var column = new Column(name);
            board.addColumn(column);
            $columnInput.val('');
            removeClassActive();
        }
    });
    
    $columnInput.click(function (e) { 
        e.preventDefault();
        $(this).addClass('active');
        $('.form').addClass('active');
        $('.fas').addClass('active');
    });
    function removeClassActive() {
        $columnInput.removeClass('active');
        $('.form').removeClass('active');
        $('.fas').removeClass('active');
    }
    $('.form i').click(function (e) { 
        e.preventDefault();
        removeClassActive();
    });

    function Column(name) {
        var self = this;

        this.id = randomString();
        this.name = name;
        this.$element = createColumn();

        function createColumn() {
            //code for creating column
            var $column = $('<div>').addClass('column'),
                $columnContent = $('<div>').addClass('column-wrapper'),
                $columnTitle = $('<h2>').addClass('column-title').text(self.name),
                $columnCardlist = $('<ul>').addClass('column-card-list style2'),
                $columnDelete = $('<button>').addClass('btn-delete').append("<i class='fas fa-trash'></i>"),
                $columnForm = $('<div>').addClass('form-group '),
                $cardInput = $('<textarea>').addClass('add-card-input form-control').attr({
                    placeholder: "Add new Card",
                    rows: "2"
                }),
                $columnAddCard = $('<button>').addClass('add-card').append('<i class="fas fa-plus"></i>');

            //EVENTS
            //remove column on click
            $columnDelete.click(function () {
                self.removeColumn();
            });
            //add note after licking on button
            $columnAddCard.click(function () {
                self.addCard(new Card($cardInput.val()));
                $cardInput.val("");
                // self.addCard(new Card(prompt('Enter name of the card')));
            });
            //HOW TO MAKE IT DRY?????????
            $cardInput.keypress(function (e) {
                if (e.which === 13) {
                    e.preventDefault();

                    self.addCard(new Card($cardInput.val()));
                    var empty = $cardInput.val('');
                }
            });

            
            $column.append($columnTitle)
                .append($columnForm)
                .append($columnCardlist);
            $columnTitle.append($columnDelete);
            $columnForm.append($cardInput).append($columnAddCard);
           
            return $column;
            return $columnTitle;
            return $cardInput;
        }
    }
    Column.prototype = {
        addCard: function (card) {
            this.$element.children('ul').append(card.$element);
        },
        removeColumn: function () {
            this.$element.remove();
        }
    }

    function Card(description) {
        var self = this;
        // CREATING THE BLOCKS
        this.id = randomString();
        this.description = description;
        this.$element = createCard();
        // BINDING TO CLICK EVENT
        function createCard() {
            var $card = $('<li>').addClass('card');
            var $cardDesription = $('<p>').addClass('card-description').text(self.description);
            var $cardDelete = $('<buttion>').addClass('btn-delete').append('<i class="far fa-times-circle"></i>');
            // COMBINING BLOCKS AND RETURNING THE CARD
            $cardDelete.click(function () {
                self.removeCard();
            })

            $card.append($cardDelete)
                .append($cardDesription);
            return $card;
        }
    }
    Card.prototype = {
        removeCard: function () {
            this.$element.remove();
        }
    }

    //Creating columns
    var todoColumn = new Column('To do'),
        doingColumn = new Column('Doing'),
        doneColumn = new Column('Done');

    //adidng columns to the board
    board.addColumn(todoColumn);
    board.addColumn(doingColumn);
    board.addColumn(doneColumn);

    //creating cards
    var card1 = new Card('New Task'),
        card2 = new Card('Create Kanban boards');

    //Adding cards to columns
    todoColumn.addCard(card1);
    doingColumn.addCard(card2);

});
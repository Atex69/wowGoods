
$('.trigger').parent().on('click', function() {
    $('.modal-wrapper').toggleClass('open');
    $('.page-wrapper').toggleClass('blur-it');
    return false;
});

$('.triggerPol').parent().on('click', function() {
    $('.modals-wrap').toggleClass('open');
    $('.page-wrapper').toggleClass('blur-it');
    return false;
});

$('.modals-wrap').on('click', function (){
    $('.modal-wrap').removeClass('open');
});

$(document).ready(function () {

    $('#block10ContentCards-1').on('click', function (e) {
        e.preventDefault();
        $('#block10ContentCards-1').toggleClass('circle-active');
        $('#block10ContentCards-2').removeClass('circle-active');
        $('#block10ContentCards-3').removeClass('circle-active');


    });
    $('#block10ContentCards-2').on('click', function (e) {
        e.preventDefault();
        $('#block10ContentCards-2').toggleClass('circle-active');
        $('#block10ContentCards-1').removeClass('circle-active');
        $('#block10ContentCards-3').removeClass('circle-active');


    });
    $('#block10ContentCards-3').on('click', function (e) {
        e.preventDefault();
        $('#block10ContentCards-3').toggleClass('circle-active');
        $('#block10ContentCards-2').removeClass('circle-active');
        $('#block10ContentCards-1').removeClass('circle-active');


    });



    let initCardSwitcherDown = function () {
        let contentDown = [`<div class="block10Card1 block10Card">
                        <div class="block10User">
                            <div class="userAva">
                            <div class="userImg1"></div>
                            <div class="userInfo">
                                <div class="userName">Мария Карпенко</div>
                                <div class="userTime">1 окт 10:41</div>
                            </div>
                            </div>
                            <div class="userText">
                                Доставка быстрая, отслеживалась до<br>
                                самой почты, топы подошли на размер<br>
                                груди 3 и объем 102, не жмут, не давят,<br>
                                не просвечивают,грудь держат хорошо,<br>
                                спасибо, рекомендую, буду заказывать <br>
                                еще в этом магазине
                            </div>
                            <div class="textImgWrap">
                            <div class="userTextImg">

                            </div>
                            </div>
                        </div>

                    </div>`,`

                    <div class="block10Card2 block10Card">
                        <div class="block10User">
                            <div class="userAva">
                            <div class="userImg1"></div>
                                <div class="userInfo">
                                    <div class="userName">Оля Иванова</div>
                                    <div class="userTime">5 дек 13:43</div>
                                </div>
                            </div>

                            <div class="userText">
                                В магазинах же все только для худышек.<br>
                                А где найти для нас полненьких? Заказала<br>
                               этот набор. Пришло действительно три<br>
                                топа. Кружево нежное, материал хоть и тонкий, но прочный и хорошо тянется.<br>
                                Как утром надела, так и весь день<br>
                                проходила. Слов нет,как хорошо! Девочки,<br>
                                у кого такие же проблемы, берите, не пожалеете!
                            </div>
                            <div class="textImgWrap">
                                <div class="userTextImg">

                                </div>
                            </div>
                        </div>
                    </div>`,`
                    <div class="block10Card3 block10Card">
                        <div class="block10User">
                            <div class="userAva">
                            <div class="userImg1"></div>
                            <div class="userInfo">
                                <div class="userName">Анастасия Венгер</div>
                                <div class="userTime">1 дек 14:01</div>
                            </div>
                            </div>
                            <div class="userText">
                               Поверьте, с маленькой грудью тоже есть<br>
                                свои минусы! Покупала раньше белье пуш<br>
                                ап. Носить его невозможно - не вдохнуть,<br>
                                не выдохнуть. В ажур бра есть специальные<br>
                                вставки, они как раз и приподнимают грудь.<br>
                                Если надо, я могу убрать их. Тогда<br>
                                получается обычный топ, который можно надеть под все что угодно.
                            </div>
                            <div class="textImgWrap">
                                <div class="userTextImg">

                                </div>
                            </div>
                        </div>
                    </div>`];


        let containerDown = $('.block10Cards');

        let renderDown = (index)=> {
            let contentCopy = contentDown.slice();

            for (let i = 0; i < index; i++) {
                contentCopy.push(contentCopy.shift());
            }

            render(contentCopy);
        };


        let render = (contentCopy) => {
            containerDown.empty();
            for (let i = 0; i < contentCopy.length; i++) {
                containerDown.append(contentCopy[i]);
            }
        };





        let initDown = () => {
            for (let i = 0; i < 4; i++) {
                $('#block10ContentCards-'+(i+1)).click(() => {
                    renderDown(i);
                })
            }
        };

        initDown();
        renderDown(0)
    };






    initCardSwitcherDown();
});
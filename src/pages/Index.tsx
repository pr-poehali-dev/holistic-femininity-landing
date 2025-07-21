import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-pink to-white">
      {/* Header */}
      <header className="relative px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Icon name="Flower" className="text-soft-pink" size={32} />
            <span className="font-heading text-2xl font-semibold text-charcoal">
              Академия Женственности
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#programs" className="font-body text-charcoal hover:text-soft-pink transition-colors">
              Программы
            </a>
            <a href="#about" className="font-body text-charcoal hover:text-soft-pink transition-colors">
              Об академии
            </a>
            <a href="#prices" className="font-body text-charcoal hover:text-soft-pink transition-colors">
              Тарифы
            </a>
            <a href="#reviews" className="font-body text-charcoal hover:text-soft-pink transition-colors">
              Отзывы
            </a>
          </div>
          <Button className="bg-soft-pink hover:bg-peach text-white font-body">
            Записаться
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-soft-pink/20 rounded-full mb-8">
            <Icon name="Heart" className="text-soft-pink" size={40} />
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-light text-charcoal mb-6 leading-tight">
            Раскройте свою
            <br />
            <span className="text-soft-pink">истинную женственность</span>
          </h1>
          <p className="font-body text-xl text-charcoal/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Холистический подход к развитию женственности от Элеоноры Родионовой. 
            Обретите гармонию с собой и миром через древние практики и современные методы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-soft-pink hover:bg-peach text-white font-body px-8 py-4 text-lg">
              Начать трансформацию
            </Button>
            <Button size="lg" variant="outline" className="border-soft-pink text-soft-pink hover:bg-soft-pink hover:text-white font-body px-8 py-4 text-lg">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-4">
              Программы Академии
            </h2>
            <p className="font-body text-xl text-charcoal/70 max-w-2xl mx-auto">
              Выберите путь, который откликается вашему сердцу
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-b from-light-pink to-white">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-pink/20 rounded-full mb-6">
                  <Icon name="Flower2" className="text-soft-pink" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-medium text-charcoal mb-4">
                  Основы Женственности
                </h3>
                <p className="font-body text-charcoal/70 mb-6 leading-relaxed">
                  Познайте базовые принципы женской энергии и начните путь к внутренней гармонии
                </p>
                <Button variant="outline" className="border-soft-pink text-soft-pink hover:bg-soft-pink hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-b from-peach/20 to-white">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-peach/20 rounded-full mb-6">
                  <Icon name="Sparkles" className="text-peach" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-medium text-charcoal mb-4">
                  Глубинная Трансформация
                </h3>
                <p className="font-body text-charcoal/70 mb-6 leading-relaxed">
                  Интенсивная работа с подсознанием и раскрытие скрытых граней личности
                </p>
                <Button variant="outline" className="border-peach text-peach hover:bg-peach hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-b from-soft-pink/20 to-white">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-charcoal/10 rounded-full mb-6">
                  <Icon name="Crown" className="text-charcoal" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-medium text-charcoal mb-4">
                  Мастерство Богини
                </h3>
                <p className="font-body text-charcoal/70 mb-6 leading-relaxed">
                  Высший уровень владения женской силой и мудростью для опытных практикующих
                </p>
                <Button variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-gradient-to-br from-light-pink to-peach/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-6">
                Элеонора Родионова
              </h2>
              <p className="font-body text-lg text-charcoal/80 mb-6 leading-relaxed">
                Основатель Академии Холистической Женственности, мастер древних практик 
                и современных методов трансформации личности.
              </p>
              <p className="font-body text-lg text-charcoal/80 mb-8 leading-relaxed">
                За 15 лет практики помогла тысячам женщин обрести внутреннюю силу, 
                уверенность и гармонию с собой и окружающим миром.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" className="text-soft-pink" size={20} />
                  <span className="font-body text-charcoal">2000+ учениц</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" className="text-peach" size={20} />
                  <span className="font-body text-charcoal">15 лет опыта</span>
                </div>
              </div>
              <Button className="bg-charcoal hover:bg-charcoal/90 text-white font-body">
                Узнать больше
              </Button>
            </div>
            <div className="text-center">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden">
                <img 
                  src="/img/548407fe-638c-4e9a-8244-445075f73c93.jpg" 
                  alt="Элеонора Родионова"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prices" className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-4">
              Тарифы
            </h2>
            <p className="font-body text-xl text-charcoal/70">
              Выберите подходящий формат обучения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-2 border-gray-100 hover:border-soft-pink transition-colors">
              <CardContent className="p-0">
                <h3 className="font-heading text-2xl font-medium text-charcoal mb-2">Самостоятельный</h3>
                <div className="text-4xl font-light text-soft-pink mb-6">₽19 990</div>
                <ul className="font-body text-charcoal/70 space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-soft-pink mr-2" size={16} />
                    Доступ к базовому курсу
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-soft-pink mr-2" size={16} />
                    Медитации и практики
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-soft-pink mr-2" size={16} />
                    Чат поддержки
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-soft-pink text-soft-pink hover:bg-soft-pink hover:text-white">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 text-center border-2 border-soft-pink bg-gradient-to-b from-soft-pink/5 to-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-soft-pink text-white px-4 py-1 rounded-full text-sm font-body">
                Популярный
              </div>
              <CardContent className="p-0">
                <h3 className="font-heading text-2xl font-medium text-charcoal mb-2">С наставником</h3>
                <div className="text-4xl font-light text-soft-pink mb-6">₽49 990</div>
                <ul className="font-body text-charcoal/70 space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-soft-pink mr-2" size={16} />
                    Полный курс трансформации
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-soft-pink mr-2" size={16} />
                    Личные консультации
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-soft-pink mr-2" size={16} />
                    Групповые практики
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-soft-pink mr-2" size={16} />
                    Поддержка куратора
                  </li>
                </ul>
                <Button className="w-full bg-soft-pink hover:bg-peach text-white">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 text-center border-2 border-gray-100 hover:border-peach transition-colors">
              <CardContent className="p-0">
                <h3 className="font-heading text-2xl font-medium text-charcoal mb-2">VIP</h3>
                <div className="text-4xl font-light text-peach mb-6">₽99 990</div>
                <ul className="font-body text-charcoal/70 space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-peach mr-2" size={16} />
                    Индивидуальная программа
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-peach mr-2" size={16} />
                    Работа с Элеонорой
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-peach mr-2" size={16} />
                    Закрытые мастер-классы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-peach mr-2" size={16} />
                    Пожизненная поддержка
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-peach text-peach hover:bg-peach hover:text-white">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="px-6 py-20 bg-gradient-to-br from-peach/10 to-light-pink">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-4">
              Отзывы выпускниц
            </h2>
            <p className="font-body text-xl text-charcoal/70">
              Истории трансформации наших учениц
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/80 backdrop-blur border-0">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-soft-pink rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-body font-semibold text-charcoal">Анна Петрова</h4>
                    <p className="font-body text-sm text-charcoal/60">Программа "Основы Женственности"</p>
                  </div>
                </div>
                <p className="font-body text-charcoal/80 leading-relaxed mb-4">
                  "Академия изменила мою жизнь кардинально. Я наконец-то поняла, что значит быть 
                  настоящей женщиной и как использовать свою энергию для создания гармонии в отношениях."
                </p>
                <div className="flex text-peach">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="fill-current" size={16} />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur border-0">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-peach rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-body font-semibold text-charcoal">Мария Сидорова</h4>
                    <p className="font-body text-sm text-charcoal/60">Программа "Глубинная Трансформация"</p>
                  </div>
                </div>
                <p className="font-body text-charcoal/80 leading-relaxed mb-4">
                  "Холистический подход Элеоноры помог мне работать не только с внешними проявлениями, 
                  но и с глубинными блоками. Результат превзошел все ожидания!"
                </p>
                <div className="flex text-peach">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="fill-current" size={16} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-light text-white mb-6">
            Готовы начать свою трансформацию?
          </h2>
          <p className="font-body text-xl text-white/80 mb-8 leading-relaxed">
            Присоединяйтесь к сообществу женщин, которые выбрали путь осознанности и гармонии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-soft-pink hover:bg-peach text-white font-body px-8 py-4 text-lg">
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal font-body px-8 py-4 text-lg">
              Скачать программу
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-charcoal border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Flower" className="text-soft-pink" size={24} />
                <span className="font-heading text-xl font-semibold text-white">
                  Академия Женственности
                </span>
              </div>
              <p className="font-body text-white/70 text-sm leading-relaxed">
                Холистический подход к развитию женственности и внутренней гармонии
              </p>
            </div>
            <div>
              <h4 className="font-body font-semibold text-white mb-4">Программы</h4>
              <ul className="font-body text-white/70 text-sm space-y-2">
                <li>Основы Женственности</li>
                <li>Глубинная Трансформация</li>
                <li>Мастерство Богини</li>
              </ul>
            </div>
            <div>
              <h4 className="font-body font-semibold text-white mb-4">Контакты</h4>
              <ul className="font-body text-white/70 text-sm space-y-2">
                <li>info@femininity-academy.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
            <div>
              <h4 className="font-body font-semibold text-white mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" className="text-white/70 hover:text-soft-pink cursor-pointer" size={20} />
                <Icon name="Facebook" className="text-white/70 hover:text-soft-pink cursor-pointer" size={20} />
                <Icon name="Youtube" className="text-white/70 hover:text-soft-pink cursor-pointer" size={20} />
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="font-body text-white/60 text-sm">
              © 2024 Академия Холистической Женственности. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
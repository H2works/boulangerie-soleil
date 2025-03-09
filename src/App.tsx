import React from 'react';
import { Instagram, Facebook, MapPin, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Hero Section */}
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=2048")'
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-serif mb-4">Boulangerie Soleil</h1>
          <p className="text-xl font-light">毎日を特別な一日に</p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-serif text-center text-[#5C4B3C] mb-12">私たちのこだわり</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=1024"
              alt="Fresh bread"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6 text-[#5C4B3C]">
            <p className="text-lg">
              厳選された素材と伝統的な製法で、毎日心を込めて焼き上げています。
              自家製天然酵母を使用し、じっくりと時間をかけて発酵させることで、
              深い味わいと香りを引き出しています。
            </p>
            <p className="text-lg">
              パンづくりへの情熱と、お客様の笑顔のために。
              毎朝早くから、新鮮で温かいパンをご用意しております。
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-[#EBE3D5] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center text-[#5C4B3C] mb-12">人気商品</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1024",
                name: "クロワッサン",
                description: "バターの香り豊かな伝統的なクロワッサン"
              },
              {
                image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&q=80&w=1024",
                name: "カンパーニュ",
                description: "自家製天然酵母使用の本格的なカンパーニュ"
              },
              {
                image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=1024",
                name: "バゲット",
                description: "外はパリッと、中はもっちりと"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#5C4B3C] mb-2">{product.name}</h3>
                  <p className="text-[#8B7355]">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Store Information */}
      <div className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-serif text-center text-[#5C4B3C] mb-12">店舗情報</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-[#5C4B3C]">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">住所</h3>
                <p>〒150-0001<br />東京都渋谷区神宮前1-1-1</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">営業時間</h3>
                <p>火曜日〜日曜日: 7:00 - 19:00<br />月曜日: 定休日</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3247739532513!2d139.70256687677415!3d35.671998872372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9fa9e2e881%3A0x35396c30d6f4408!2z5p2x5Lqs6YO95riL6LC35Yy66神5YaF5YmN77yR5LiB55uu77yR!5e0!3m2!1sja!2sjp!4v1709700000000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Footer with SNS */}
      <footer className="bg-[#5C4B3C] text-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="hover:text-[#EBE3D5] transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-[#EBE3D5] transition-colors">
              <Facebook className="w-8 h-8" />
            </a>
          </div>
          <p className="text-center text-sm">© 2024 Boulangerie Soleil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
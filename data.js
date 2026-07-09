// Nội dung học: Banking/Fintech + IT + Giao tiếp công sở + Đời sống
// category: "work" (công việc), "life" (đời sống) hoặc "core" (nền tảng - hiện ở cả 2 mode)
// Mỗi topic: words (từ vựng) + phrases (cụm câu giao tiếp)
const VOCAB_DATA = {
  topics: [
    {
      id: "glue_words", name: "Từ nối câu tự nhiên", icon: "🔗", color: "#6D5AE6", category: "core",
      branches: [
        { label: "Mở đầu ý kiến", wordIds: ["gw1","gw3","gw7"] },
        { label: "Chuyển & thêm ý", wordIds: ["gw2","gw5","gw10","gw4"] },
        { label: "Không chắc chắn", wordIds: ["gw8","gw9","gw15"] },
        { label: "Kết luận & chuyển hướng", wordIds: ["gw6","gw11","gw14","gw12"] },
        { label: "Trấn an & đồng ý", wordIds: ["gw13","gw16"] }
      ],
      words: [
        { id:"gw1", word:"actually", ipa:"/ˈæktʃuəli/", meaning:"thật ra thì", example:"Actually, I think we should wait.", icon:"💭", mnemonic:"Tưởng tượng bạn GẠT BỎ lớp vỏ giả tạo để lộ ra sự thật (actual) giấu bên trong" },
        { id:"gw2", word:"by the way", ipa:"/baɪ ðə weɪ/", meaning:"à mà, tiện thể", example:"By the way, did you finish the report?", icon:"🚶", mnemonic:"Tưởng tượng đang đi TRÊN ĐƯỜNG (the way), bạn chợt quay đầu nhắc thêm 1 chuyện tiện thể" },
        { id:"gw3", word:"to be honest", ipa:"/tə bi ˈɑnɪst/", meaning:"thành thật mà nói", example:"To be honest, I don't think that will work.", icon:"🫡", mnemonic:"Tưởng tượng bạn đặt tay lên ngực THỀ nói thật (honest), không giấu diếm gì" },
        { id:"gw4", word:"the thing is", ipa:"/ðə θɪŋ ɪz/", meaning:"vấn đề là", example:"The thing is, we don't have enough time.", icon:"🧩", mnemonic:"Tưởng tượng bạn chỉ thẳng ngón tay vào đúng CÁI VIỆC (thing) đang là vấn đề thật sự" },
        { id:"gw5", word:"on top of that", ipa:"/ɑn tɑp əv ðæt/", meaning:"hơn nữa, thêm vào đó", example:"On top of that, the client changed the requirements.", icon:"📚", mnemonic:"Tưởng tượng 1 chồng sách đang cao dần, bạn CHỒNG THÊM 1 cuốn nữa LÊN ĐỈNH (on top)" },
        { id:"gw6", word:"anyway", ipa:"/ˈɛniweɪ/", meaning:"dù sao thì", example:"Anyway, let's move on to the next topic.", icon:"🔄", mnemonic:"Tưởng tượng dù đi BẤT KỲ CON ĐƯỜNG nào (any way) thì kết quả vẫn vậy - thôi bỏ qua" },
        { id:"gw7", word:"I mean", ipa:"/aɪ min/", meaning:"ý tôi là", example:"I mean, it's not a big deal, but still.", icon:"💬", mnemonic:"Tưởng tượng bạn dừng lại, chỉ thẳng vào Ý ĐỊNH (mean) thật sự phía sau câu vừa nói" },
        { id:"gw8", word:"sort of", ipa:"/sɔrt əv/", meaning:"kiểu như, hơi hơi", example:"It's sort of complicated to explain.", icon:"🌀", mnemonic:"Tưởng tượng bạn lắc tay nửa vời - 'ĐẠI LOẠI (sort) LÀ' vậy, không chắc chắn hẳn" },
        { id:"gw9", word:"as far as I know", ipa:"/æz fɑr æz aɪ noʊ/", meaning:"theo tôi biết thì", example:"As far as I know, the meeting is at 3pm.", icon:"🔍", mnemonic:"Tưởng tượng kiến thức của bạn chỉ đi được XA (far) tới đó - ngoài tầm là chịu" },
        { id:"gw10", word:"speaking of which", ipa:"/ˈspikɪŋ əv wɪtʃ/", meaning:"nói đến chuyện đó", example:"Speaking of which, have you talked to him yet?", icon:"🗣️", mnemonic:"Tưởng tượng vừa NÓI (speaking) tới đây, 1 bóng đèn ý tưởng khác bật sáng liên quan" },
        { id:"gw11", word:"at the end of the day", ipa:"/æt ði ɛnd əv ðə deɪ/", meaning:"suy cho cùng", example:"At the end of the day, it's the client's decision.", icon:"🌇", mnemonic:"Tưởng tượng mặt trời lặn, bạn ngồi lại nhìn CUỐI NGÀY để đúc kết điều quan trọng nhất" },
        { id:"gw12", word:"either way", ipa:"/ˈiðər weɪ/", meaning:"dù thế nào đi nữa", example:"Either way, we need to inform the team.", icon:"⚖️", mnemonic:"Tưởng tượng 2 con đường tách ra, nhưng dù chọn ĐƯỜNG NÀO cũng dẫn tới cùng 1 nơi" },
        { id:"gw13", word:"no worries", ipa:"/noʊ ˈwɜriz/", meaning:"không sao đâu", example:"No worries, take your time.", icon:"😊", mnemonic:"Tưởng tượng bạn phẩy tay xua tan hết MỌI LO LẮNG (worries) của người đối diện" },
        { id:"gw14", word:"that said", ipa:"/ðæt sɛd/", meaning:"dù vậy, tuy nhiên", example:"That said, we should still be careful.", icon:"🔀", mnemonic:"Tưởng tượng bạn vừa NÓI (said) xong 1 câu, giờ quay ngoắt 180 độ thêm ý ngược lại" },
        { id:"gw15", word:"more or less", ipa:"/mɔr ɔr lɛs/", meaning:"đại khái, gần như vậy", example:"The project is more or less finished.", icon:"🤏", mnemonic:"Tưởng tượng 1 cái cân lắc lư giữa NHIỀU HƠN (more) và ÍT HƠN (less) - đại khái vậy" },
        { id:"gw16", word:"by all means", ipa:"/baɪ ɔl minz/", meaning:"cứ tự nhiên, được thôi", example:"By all means, go ahead and ask.", icon:"👍", mnemonic:"Tưởng tượng bạn mở toang CẢ (all) mọi CÁCH (means) cho phép đối phương thoải mái làm" }
      ],
      phrases: [
        { id:"gwp1", phrase:"Actually, to be honest, I haven't started yet.", meaning:"Thật ra thì, nói thật tôi chưa bắt đầu đâu.", context:"Kết hợp 2 từ nối để nói thật nhẹ nhàng hơn.", hook:"Tưởng tượng 2 lớp vỏ 'thật ra' và 'nói thật' được bóc ra liên tiếp trước khi thú nhận" },
        { id:"gwp2", phrase:"The thing is, we're already over budget.", meaning:"Vấn đề là, chúng ta đã vượt ngân sách rồi.", context:"", hook:"Tưởng tượng đồng hồ đo ngân sách kim đã vọt qua vạch đỏ (over budget)" },
        { id:"gwp3", phrase:"Anyway, that's a story for another day.", meaning:"Dù sao thì, chuyện đó để hôm khác kể.", context:"", hook:"Tưởng tượng cuốn truyện được gấp lại, hẹn kể tiếp vào 1 ngày khác" },
        { id:"gwp4", phrase:"Speaking of which, that reminds me of something.", meaning:"Nói đến chuyện đó, làm tôi nhớ ra 1 việc.", context:"", hook:"Tưởng tượng 1 bóng đèn bật sáng đột ngột giữa câu chuyện" },
        { id:"gwp5", phrase:"At the end of the day, we just want it to work.", meaning:"Suy cho cùng, chúng ta chỉ muốn nó chạy được thôi.", context:"", hook:"Tưởng tượng mặt trời lặn, chỉ còn lại 1 mong muốn duy nhất đọng lại" },
        { id:"gwp6", phrase:"That said, let's give it a try.", meaning:"Dù vậy, cứ thử xem sao.", context:"", hook:"Tưởng tượng bạn vừa dứt câu lo lắng, liền xắn tay áo thử luôn" }
      ]
    },
    {
      id: "pronunciation_clinic", name: "Phát âm cho người Việt", icon: "🎯", color: "#DC7B3E", category: "core",
      branches: [
        { label: "Âm TH", wordIds: ["pc1","pc2"] },
        { label: "Âm R / L", wordIds: ["pc3","pc4"] },
        { label: "Âm V", wordIds: ["pc5"] },
        { label: "Đuôi -ed", wordIds: ["pc6","pc7","pc8"] },
        { label: "Đuôi -s", wordIds: ["pc9","pc10"] },
        { label: "Trọng âm & nối âm", wordIds: ["pc11","pc12"] }
      ],
      words: [
        { id:"pc1", word:"think", ipa:"/θɪŋk/", meaning:"âm TH vô thanh (θ) - cắn nhẹ đầu lưỡi giữa 2 hàm răng, không phải âm T", example:"I think this is right.", icon:"👅", mnemonic:"Tưởng tượng bạn CẮN NHẸ đầu lưỡi như cắn 1 miếng bánh mỏng rồi thổi hơi ra - đừng thụt lưỡi vào thành âm T" },
        { id:"pc2", word:"this", ipa:"/ðɪs/", meaning:"âm TH hữu thanh (ð) - giống âm ở 'think' nhưng có rung dây thanh", example:"This is my book.", icon:"👅", mnemonic:"Tưởng tượng y hệt âm 'think' nhưng giờ đặt tay lên cổ để CẢM NHẬN RUNG như động cơ xe máy nổ" },
        { id:"pc3", word:"light", ipa:"/laɪt/", meaning:"âm L cuối từ - đầu lưỡi phải chạm vòm miệng trên, không được bỏ qua", example:"Turn on the light.", icon:"💡", mnemonic:"Tưởng tượng đầu lưỡi là 1 công tắc, GÕ NHẸ lên vòm miệng trên để bật sáng bóng đèn - đó là âm L cuối" },
        { id:"pc4", word:"right", ipa:"/raɪt/", meaning:"âm R - cong lưỡi ra sau, không chạm vào đâu cả (khác hẳn âm L)", example:"Turn right, not left.", icon:"🔄", mnemonic:"Tưởng tượng lưỡi cong lại như đuôi con tôm, TREO LƠ LỬNG giữa miệng không chạm đâu - khác hẳn âm L chạm rõ" },
        { id:"pc5", word:"very", ipa:"/ˈvɛri/", meaning:"âm V - cắn nhẹ môi dưới bằng răng trên rồi rung, khác âm W (tròn môi)", example:"It's very good.", icon:"👄", mnemonic:"Tưởng tượng bạn cắn nhẹ môi dưới như con thỏ gặm cà rốt, rồi rung nhẹ - đó là âm V" },
        { id:"pc6", word:"walked", ipa:"/wɔkt/", meaning:"đuôi -ed đọc là /t/ khi từ kết thúc âm vô thanh (k, p, s, ch, sh)", example:"I walked to work yesterday.", icon:"🚶", mnemonic:"Tưởng tượng bước chân dừng khựng lại bằng 1 tiếng 'T' gọn lỏn, dứt khoát không kéo dài" },
        { id:"pc7", word:"played", ipa:"/pleɪd/", meaning:"đuôi -ed đọc là /d/ khi từ kết thúc âm hữu thanh (nguyên âm, l, n, v, r...)", example:"We played football all afternoon.", icon:"⚽", mnemonic:"Tưởng tượng quả bóng lăn êm ái rồi dừng nhẹ nhàng bằng tiếng 'D' êm tai" },
        { id:"pc8", word:"wanted", ipa:"/ˈwɑntɪd/", meaning:"đuôi -ed đọc thành 1 âm tiết riêng /ɪd/ khi từ kết thúc bằng t hoặc d", example:"She wanted to leave early.", icon:"🙋", mnemonic:"Tưởng tượng từ 'want' vấp phải cục đá 't' nên phải NHẢY THÊM 1 BƯỚC /ɪd/ mới qua được" },
        { id:"pc9", word:"cats", ipa:"/kæts/", meaning:"đuôi -s/-es đọc là /s/ khi từ kết thúc âm vô thanh", example:"I have two cats at home.", icon:"🐱", mnemonic:"Tưởng tượng con mèo rít lên 1 tiếng 'S' the thé ở cuối câu" },
        { id:"pc10", word:"dogs", ipa:"/dɔgz/", meaning:"đuôi -s/-es đọc là /z/ khi từ kết thúc âm hữu thanh", example:"They have three dogs.", icon:"🐶", mnemonic:"Tưởng tượng con chó gừ lên 1 tiếng 'Z' trầm ừ ừ trong cổ họng" },
        { id:"pc11", word:"record", ipa:"/ˈrɛkərd/ (n) - /rɪˈkɔrd/ (v)", meaning:"trọng âm rơi vào âm 1 khi là danh từ, âm 2 khi là động từ (áp dụng nhiều từ 2 âm tiết)", example:"I want to record a new record.", icon:"🎵", mnemonic:"Tưởng tượng cái ĐĨA NHẠC (danh từ) đứng yên nhấn mạnh phía trước, còn hành động THU ÂM (động từ) thì nhấn dồn về phía sau" },
        { id:"pc12", word:"an apple", ipa:"/ən ˈæpəl/", meaning:"nối phụ âm cuối với nguyên âm đầu của từ sau, đọc liền không tách rời", example:"I ate an apple an hour ago.", icon:"🔗", mnemonic:"Tưởng tượng 2 từ 'an' và 'apple' bị NAM CHÂM hút dính chặt vào nhau, đọc liền 1 hơi không tách rời" }
      ],
      phrases: [
        { id:"pcp1", phrase:"Three thin things think alike.", meaning:"Câu luyện âm TH - đọc chậm 3 lần rồi tăng tốc dần.", context:"Tongue twister luyện âm TH (θ).", hook:"Tưởng tượng 3 vật mỏng dính (thin things) chụm đầu suy nghĩ (think) giống hệt nhau" },
        { id:"pcp2", phrase:"She sells seashells by the seashore.", meaning:"Câu luyện âm S/SH kinh điển.", context:"Tongue twister luyện phân biệt S và SH.", hook:"Tưởng tượng cô gái ngồi bán vỏ sò dọc bờ biển suốt cả ngày" },
        { id:"pcp3", phrase:"I really like the red lorry.", meaning:"Câu luyện phân biệt âm R và L.", context:"Chú ý lưỡi cong ra sau (R) và lưỡi chạm vòm miệng (L).", hook:"Tưởng tượng chiếc xe tải đỏ (red lorry) mà bạn thực lòng (really) rất thích" },
        { id:"pcp4", phrase:"We walked, talked, and laughed.", meaning:"Câu luyện 3 cách đọc đuôi -ed khác nhau.", context:"walked=/t/, talked=/t/, laughed=/t/ - thử đổi sang played/needed để so sánh.", hook:"Tưởng tượng bạn vừa đi bộ vừa nói chuyện vừa cười phá lên trên phố" },
        { id:"pcp5", phrase:"The cats and dogs played outside.", meaning:"Câu luyện đuôi -s và -ed trong cùng 1 câu.", context:"cats=/s/, dogs=/z/, played=/d/.", hook:"Tưởng tượng lũ mèo (s) và chó (z) đang chạy chơi (d) ngoài sân cùng lúc" },
        { id:"pcp6", phrase:"Can you record this record for me?", meaning:"Câu luyện trọng âm danh từ/động từ của từ 'record'.", context:"record (v, nhấn âm 2) - record (n, nhấn âm 1).", hook:"Tưởng tượng đĩa nhạc (record-n) đang quay trong lúc bạn bấm nút thu âm (record-v) chính bài hát đó" }
      ]
    },
    {
      id: "meetings", name: "Họp & Thảo luận công việc", icon: "🗓️", color: "#4F46E5", category: "work",
      branches: [
        { label: "Chuẩn bị & điều hành", wordIds: ["m1","m4","m6","m12"] },
        { label: "Trao đổi ý kiến", wordIds: ["m8","m7","m9","m10"] },
        { label: "Vai trò trong họp", wordIds: ["m2","m3","m11","m5"] }
      ],
      words: [
        { id:"m1", word:"agenda", ipa:"/əˈdʒendə/", meaning:"chương trình họp", example:"Let's stick to the agenda so we finish on time.", icon:"📋", mnemonic:"Tưởng tượng thư ký hét lên 'A GEN ĐÃ XONG CHƯA?!' khi đang lên danh sách việc cần họp" },
        { id:"m2", word:"minutes", ipa:"/ˈmɪnɪts/", meaning:"biên bản họp", example:"Can you take the minutes for this meeting?", icon:"📝", mnemonic:"Tưởng tượng 1 người BẤM GIỜ TỪNG PHÚT (minute) trong họp, ghi lại chính xác ai nói gì phút nào" },
        { id:"m3", word:"stakeholder", ipa:"/ˈsteɪkhoʊldər/", meaning:"bên liên quan", example:"We need sign-off from all stakeholders.", icon:"🤝", mnemonic:"Tưởng tượng có người CẮM 1 CÂY CỌC (stake) to đùng xuống đất để GIỮ (holder) phần quyền lợi của mình" },
        { id:"m4", word:"deadline", ipa:"/ˈdɛdlaɪn/", meaning:"hạn chót", example:"The deadline for this report is Friday.", icon:"⏰", mnemonic:"Tưởng tượng 1 vạch kẻ trên sàn, ai bước qua sau giờ đó là 'CHẾT' (dead) luôn về mặt công việc" },
        { id:"m5", word:"follow up", ipa:"/ˈfɑloʊ ʌp/", meaning:"theo dõi/nhắc lại sau", example:"I'll follow up with you by email.", icon:"🔁", mnemonic:"Tưởng tượng bạn ĐI THEO SÁT NÚT (follow) ai đó, tiến lên (up) gần hơn để nhắc lại chuyện chưa xong" },
        { id:"m6", word:"postpone", ipa:"/poʊstˈpoʊn/", meaning:"hoãn lại", example:"We had to postpone the meeting to next week.", icon:"⏸️", mnemonic:"Tưởng tượng bạn DÁN (post) cái hẹn dời sang 1 ngày SAU đó - hoãn lại lịch" },
        { id:"m7", word:"brainstorm", ipa:"/ˈbreɪnstɔrm/", meaning:"động não", example:"Let's brainstorm some ideas before deciding.", icon:"🌪️", mnemonic:"Tưởng tượng 1 cơn BÃO (storm) đang quét qua bộ NÃO (brain), hất tung hàng chục ý tưởng bay tán loạn" },
        { id:"m8", word:"bring up", ipa:"/brɪŋ ʌp/", meaning:"nêu ra (vấn đề)", example:"She brought up a good point about the budget.", icon:"💬", mnemonic:"Tưởng tượng bạn cầm (bring) 1 vấn đề ĐƯA LÊN (up) cao giữa bàn họp cho mọi người cùng thấy" },
        { id:"m9", word:"on the same page", ipa:"/ɑn ðə seɪm peɪdʒ/", meaning:"cùng hiểu như nhau", example:"Let's make sure we're all on the same page.", icon:"📖", mnemonic:"Tưởng tượng cả phòng họp cùng chăm chú đọc chung 1 TRANG SÁCH (page) - ai cũng hiểu y hệt nhau" },
        { id:"m10", word:"touch base", ipa:"/tʌtʃ beɪs/", meaning:"trao đổi nhanh", example:"Let's touch base tomorrow morning.", icon:"📞", mnemonic:"Tưởng tượng bạn chạy về CHẠM (touch) vào Ô GỐC (base) trong bóng chày để xác nhận an toàn" },
        { id:"m11", word:"take the floor", ipa:"/teɪk ðə flɔr/", meaning:"phát biểu tiếp", example:"I'd like to take the floor now, if that's okay.", icon:"🎤", mnemonic:"Tưởng tượng cả sàn diễn (floor) đột nhiên chỉ còn mình bạn đứng - bạn vừa 'giành lấy' sân khấu để phát biểu" },
        { id:"m12", word:"wrap up", ipa:"/ræp ʌp/", meaning:"kết thúc/tổng kết", example:"Let's wrap up the meeting with next steps.", icon:"🎁", mnemonic:"Tưởng tượng cuộc họp là 1 món quà, giờ bạn GÓI (wrap) nó lại thật gọn để kết thúc" }
      ],
      phrases: [
        { id:"mp1", phrase:"Let's circle back to this later.", meaning:"Chúng ta quay lại vấn đề này sau nhé.", context:"Dùng khi muốn hoãn 1 điểm để bàn sau.", hook:"Tưởng tượng bạn vẽ 1 vòng tròn (circle) rồi đi dạo 1 vòng, lát quay lại đúng điểm cũ" },
        { id:"mp2", phrase:"Can everyone hear me okay?", meaning:"Mọi người nghe rõ tôi không?", context:"Mở đầu họp online.", hook:"Tưởng tượng bạn gõ micro 'cốc cốc' rồi ngó quanh xem mọi cái tai có vểnh lên không" },
        { id:"mp3", phrase:"I think we're getting off track.", meaning:"Tôi nghĩ chúng ta đang lạc đề.", context:"Kéo cuộc họp về đúng hướng.", hook:"Tưởng tượng đoàn tàu đang trật (off) khỏi đường ray (track) lao sang hướng khác" },
        { id:"mp4", phrase:"Let's take this offline.", meaning:"Việc này bàn riêng sau nhé.", context:"Khi chủ đề chỉ liên quan vài người.", hook:"Tưởng tượng bạn rút phích cắm mạng (offline) để 2 người nói chuyện riêng không ai nghe được" },
        { id:"mp5", phrase:"To sum up...", meaning:"Tóm lại là...", context:"Mở đầu phần tổng kết.", hook:"Tưởng tượng bạn đang CỘNG (sum) hết mọi con số lại thành 1 kết quả cuối" },
        { id:"mp6", phrase:"I'll loop you in.", meaning:"Tôi sẽ thêm bạn vào để cùng theo dõi.", context:"Khi thêm ai đó vào email/nhóm chat.", hook:"Tưởng tượng bạn vẽ 1 vòng lặp (loop) kéo thêm 1 người nữa vào trong vòng tròn email" },
        { id:"mp7", phrase:"Sorry to interrupt, but...", meaning:"Xin lỗi ngắt lời, nhưng...", context:"Lịch sự khi cần chen ngang.", hook:"Tưởng tượng bạn giơ tay chặn ngang (interrupt) dòng chảy lời nói của người khác 1 cách lịch sự" },
        { id:"mp8", phrase:"Let's park that for now.", meaning:"Tạm gác việc đó lại đã.", context:"Hoãn 1 ý tưởng để bàn sau.", hook:"Tưởng tượng bạn lái ý tưởng đó vào bãi ĐẬU XE (park) để tạm nghỉ đó đã" }
      ]
    },
    {
      id: "email_chat", name: "Email & Chat công sở", icon: "📧", color: "#0EA5E9", category: "work",
      branches: [
        { label: "Thao tác email", wordIds: ["e1","e2","e3","e10"] },
        { label: "Tốc độ & thái độ", wordIds: ["e4","e5","e6","e8"] },
        { label: "Giao tiếp khéo léo", wordIds: ["e7","e9"] }
      ],
      words: [
        { id:"e1", word:"attach", ipa:"/əˈtætʃ/", meaning:"đính kèm", example:"I've attached the file to this email.", icon:"📎", mnemonic:"Tưởng tượng dùng 1 cái GHIM đóng chặt file vào email - không thể rớt ra được" },
        { id:"e2", word:"cc", ipa:"/siː siː/", meaning:"gửi bản sao cho", example:"Please cc my manager on this email.", icon:"📤", mnemonic:"Tưởng tượng đang dùng GIẤY CARBON (Carbon Copy) kẹp phía sau, viết 1 lần mà ra 2 bản giống hệt gửi cho sếp" },
        { id:"e3", word:"reply-all", ipa:"/rɪˈplaɪ ɔl/", meaning:"trả lời tất cả", example:"Please don't reply-all unless it's necessary.", icon:"↩️", mnemonic:"Tưởng tượng bạn hét trả lời (reply) mà âm thanh vang khắp (all) cả văn phòng - ai cũng nghe thấy" },
        { id:"e4", word:"draft", ipa:"/dræft/", meaning:"bản nháp", example:"This is just a draft, feel free to edit it.", icon:"✏️", mnemonic:"Tưởng tượng 1 cơn GIÓ LÙA (draft cũng nghĩa là luồng gió) thổi bay tờ nháp vì nó chưa hoàn chỉnh" },
        { id:"e5", word:"escalate", ipa:"/ˈɛskəleɪt/", meaning:"đẩy lên cấp cao hơn", example:"If there's no response, we'll escalate this issue.", icon:"📈", mnemonic:"Tưởng tượng vấn đề đứng trên CẦU THANG CUỐN (escalator) tự động đi thẳng lên tận sếp tổng" },
        { id:"e6", word:"prompt", ipa:"/prɑmpt/", meaning:"nhanh chóng, kịp thời", example:"Thank you for your prompt reply.", icon:"⚡", mnemonic:"Tưởng tượng ai đó bấm nút bật đèn NGAY LẬP TỨC không chậm trễ - prompt reply nhanh như chớp" },
        { id:"e7", word:"per my last email", ipa:"/pər maɪ læst ˈiːmeɪl/", meaning:"như tôi đã nói ở email trước", example:"Per my last email, the deadline is Monday.", icon:"🔁", mnemonic:"Tưởng tượng bạn chỉ tay vào email cũ, nhấn mạnh 'NHƯ TÔI ĐÃ NÓI RỒI ĐÓ' - nhắc khéo mà hơi gắt" },
        { id:"e8", word:"kindly", ipa:"/ˈkaɪndli/", meaning:"vui lòng", example:"Kindly review the attached document.", icon:"🙏", mnemonic:"Tưởng tượng giọng nói dịu dàng như đang xoa đầu (kind = tử tế) ai đó khi nhờ vả" },
        { id:"e9", word:"touch point", ipa:"/tʌtʃ pɔɪnt/", meaning:"điểm liên hệ/tương tác", example:"This email is a touch point before our call.", icon:"📍", mnemonic:"Tưởng tượng 2 ngón tay CHẠM (touch) đúng vào 1 ĐIỂM (point) trên bản đồ - nơi 2 bên liên lạc" },
        { id:"e10", word:"out of office", ipa:"/aʊt əv ˈɔfɪs/", meaning:"vắng mặt tại văn phòng", example:"I'll be out of office next week.", icon:"🌴", mnemonic:"Tưởng tượng cái ghế văn phòng trống trơn, bạn đã bay RA KHỎI văn phòng đi chơi mất tiêu" }
      ],
      phrases: [
        { id:"ep1", phrase:"I hope this email finds you well.", meaning:"Hy vọng bạn vẫn ổn.", context:"Câu mở đầu email lịch sự.", hook:"Tưởng tượng email biến thành 1 chú chim bay đi TÌM (find) bạn giữa lúc bạn khỏe mạnh" },
        { id:"ep2", phrase:"Please see attached for more details.", meaning:"Vui lòng xem file đính kèm để biết thêm chi tiết.", context:"", hook:"Tưởng tượng bạn chỉ tay vào cái ghim giấy dán kèm phía dưới email" },
        { id:"ep3", phrase:"Let me know if you have any questions.", meaning:"Có thắc mắc gì cứ báo tôi nhé.", context:"", hook:"Tưởng tượng bạn để ngỏ 1 cánh cửa cho bất kỳ câu hỏi nào bay vào" },
        { id:"ep4", phrase:"Just a gentle reminder...", meaning:"Đây là lời nhắc nhẹ nhàng...", context:"Nhắc việc lịch sự.", hook:"Tưởng tượng bạn vỗ nhẹ (gentle) vai ai đó để nhắc chứ không phải đập bàn quát tháo" },
        { id:"ep5", phrase:"Thanks in advance.", meaning:"Cảm ơn trước.", context:"Kết thúc email khi nhờ việc gì.", hook:"Tưởng tượng bạn cảm ơn TRƯỚC (advance) cả khi việc còn chưa xảy ra" },
        { id:"ep6", phrase:"Apologies for the delayed response.", meaning:"Xin lỗi vì phản hồi trễ.", context:"", hook:"Tưởng tượng lá thư xin lỗi bị KẸT LẠI (delayed) trên đường đi rồi mới tới nơi" }
      ]
    },
    {
      id: "banking_fintech", name: "Ngân hàng số & Fintech", icon: "🏦", color: "#16A34A", category: "work",
      branches: [
        { label: "Giao dịch & tiền", wordIds: ["b1","b5","b6"] },
        { label: "Bảo mật & xác thực", wordIds: ["b2","b7","b8","b9"] },
        { label: "Vận hành hệ thống", wordIds: ["b3","b4","b10"] }
      ],
      words: [
        { id:"b1", word:"transaction", ipa:"/trænˈzækʃən/", meaning:"giao dịch", example:"The transaction failed due to insufficient balance.", icon:"💳", mnemonic:"Tưởng tượng tiền XUYÊN (trans) qua 1 cánh cửa từ ví bạn sang ví người khác - đó là hành động (action) giao dịch" },
        { id:"b2", word:"authentication", ipa:"/ɔːθɛntɪˈkeɪʃən/", meaning:"xác thực", example:"Two-factor authentication adds an extra layer of security.", icon:"🔐", mnemonic:"Tưởng tượng 1 con dấu đỏ chót đóng lên mặt bạn để xác nhận đây là hàng THẬT (authentic), không giả mạo" },
        { id:"b3", word:"onboarding", ipa:"/ˈɑnbɔrdɪŋ/", meaning:"quy trình mở tài khoản/gia nhập", example:"The onboarding process for new merchants takes 3 days.", icon:"🛬", mnemonic:"Tưởng tượng bạn đang bước LÊN (on) 1 con TÀU (board) mới - onboarding là lên tàu gia nhập" },
        { id:"b4", word:"merchant", ipa:"/ˈmɜrtʃənt/", meaning:"người bán/đối tác kinh doanh", example:"Merchants can accept payments via QR code.", icon:"🏪", mnemonic:"Tưởng tượng 1 ông chủ tiệm tạp hóa (merchandise = hàng hóa) đang bày hàng ra bán" },
        { id:"b5", word:"loan disbursement", ipa:"/loʊn dɪsˈbɜrsmənt/", meaning:"giải ngân khoản vay", example:"Loan disbursement happens within 24 hours of approval.", icon:"💰", mnemonic:"Tưởng tượng 1 vòi nước tiền được XẢ (disburse) ồ ạt vào tài khoản bạn ngay sau khi duyệt vay" },
        { id:"b6", word:"credit limit", ipa:"/ˈkrɛdɪt ˈlɪmɪt/", meaning:"hạn mức tín dụng", example:"Your credit limit has been increased.", icon:"📊", mnemonic:"Tưởng tượng 1 bức tường vô hình (limit) chặn bạn lại đúng số tiền được phép quẹt thẻ" },
        { id:"b7", word:"fraud detection", ipa:"/frɔd dɪˈtɛkʃən/", meaning:"phát hiện gian lận", example:"Our system uses AI for fraud detection.", icon:"🕵️", mnemonic:"Tưởng tượng 1 camera an ninh (detect = phát hiện) rọi đèn pin bắt quả tang tên trộm (fraud) đang lừa đảo" },
        { id:"b8", word:"compliance", ipa:"/kəmˈplaɪəns/", meaning:"tuân thủ (quy định)", example:"All transactions must meet compliance requirements.", icon:"✅", mnemonic:"Tưởng tượng mọi người cúi đầu TUÂN THEO (comply) 1 cuốn luật dày cộp - đó là sự tuân thủ" },
        { id:"b9", word:"e-KYC", ipa:"/iː keɪ waɪ siː/", meaning:"định danh khách hàng điện tử", example:"e-KYC lets customers verify identity remotely.", icon:"🪪", mnemonic:"Tưởng tượng bạn giơ CMND lên camera để máy tính tự hỏi 'MÀY LÀ AI VẬY' (Know Your Customer) rồi xác nhận từ xa" },
        { id:"b10", word:"downtime", ipa:"/ˈdaʊntaɪm/", meaning:"thời gian hệ thống ngừng hoạt động", example:"We scheduled maintenance during low-traffic downtime.", icon:"🔻", mnemonic:"Tưởng tượng cả hệ thống đột nhiên NGÃ XUỐNG (down) nằm bất động 1 khoảng thời gian (time)" }
      ],
      phrases: [
        { id:"bp1", phrase:"The system is currently experiencing an outage.", meaning:"Hệ thống đang gặp sự cố.", context:"", hook:"Tưởng tượng cả hệ thống đột nhiên tối om như mất điện (outage) toàn thành phố" },
        { id:"bp2", phrase:"Your application is under review.", meaning:"Hồ sơ của bạn đang được xem xét.", context:"", hook:"Tưởng tượng hồ sơ bạn đang nằm DƯỚI (under) kính lúp soi xét (review) của ai đó" },
        { id:"bp3", phrase:"Please verify your identity to proceed.", meaning:"Vui lòng xác thực danh tính để tiếp tục.", context:"", hook:"Tưởng tượng bạn đưa vân tay xác nhận (verify) trước khi cánh cửa tiếp theo mở ra" },
        { id:"bp4", phrase:"This feature is currently in beta.", meaning:"Tính năng này đang thử nghiệm.", context:"", hook:"Tưởng tượng tính năng này còn mặc đồ tập sự (beta), chưa chính thức ra mắt" },
        { id:"bp5", phrase:"We appreciate your patience during this process.", meaning:"Cảm ơn sự kiên nhẫn của bạn.", context:"", hook:"Tưởng tượng bạn nhận 1 huy chương cảm ơn vì đã kiên nhẫn (patience) chờ đợi" },
        { id:"bp6", phrase:"The transaction was declined.", meaning:"Giao dịch bị từ chối.", context:"", hook:"Tưởng tượng cánh cửa giao dịch đóng sầm lại, từ chối (decline) thẳng thừng" }
      ]
    },
    {
      id: "agile_dev", name: "Agile & Phát triển phần mềm", icon: "💻", color: "#DB2777", category: "work",
      branches: [
        { label: "Chu trình làm việc", wordIds: ["a1","a2","a4","a5"] },
        { label: "Chất lượng code", wordIds: ["a3","a6","a7","a8"] },
        { label: "Vấn đề kỹ thuật", wordIds: ["a9","a10"] }
      ],
      words: [
        { id:"a1", word:"sprint", ipa:"/sprɪnt/", meaning:"chu kỳ làm việc ngắn", example:"We're in the middle of a two-week sprint.", icon:"🏃", mnemonic:"Tưởng tượng cả team CHẠY NƯỚC RÚT (sprint) hết tốc lực trong đúng 2 tuần rồi ngã gục khi hết sprint" },
        { id:"a2", word:"backlog", ipa:"/ˈbæklɔg/", meaning:"danh sách việc tồn đọng", example:"Add this task to the backlog.", icon:"📚", mnemonic:"Tưởng tượng 1 khúc gỗ (log) chất đống ở phía SAU (back) lưng bạn - toàn việc chưa làm bị bỏ lại" },
        { id:"a3", word:"bug", ipa:"/bʌg/", meaning:"lỗi phần mềm", example:"There's a bug in the login screen.", icon:"🐛", mnemonic:"Tưởng tượng 1 CON BỌ thật đang bò lổm ngổm trong bàn phím làm màn hình vỡ hình" },
        { id:"a4", word:"deploy", ipa:"/dɪˈplɔɪ/", meaning:"triển khai", example:"We'll deploy the update tonight.", icon:"🚀", mnemonic:"Tưởng tượng 1 đội quân đang TRIỂN KHAI đội hình (deploy) ra chiến trường - code cũng 'ra trận' vậy" },
        { id:"a5", word:"rollback", ipa:"/ˈroʊlbæk/", meaning:"hoàn tác về bản trước", example:"We had to rollback the release due to crashes.", icon:"⏪", mnemonic:"Tưởng tượng cuộn 1 cuộn phim (roll) tua NGƯỢC LẠI (back) về đúng cảnh cũ trước khi có lỗi" },
        { id:"a6", word:"code review", ipa:"/koʊd rɪˈvjuː/", meaning:"kiểm tra mã nguồn", example:"Please request a code review before merging.", icon:"🔍", mnemonic:"Tưởng tượng 1 ông thầy giáo cầm kính lúp soi (review) từng dòng code như chấm bài kiểm tra" },
        { id:"a7", word:"merge conflict", ipa:"/mɜrdʒ ˈkɑnflɪkt/", meaning:"xung đột khi gộp code", example:"I'm resolving a merge conflict right now.", icon:"⚔️", mnemonic:"Tưởng tượng 2 dòng sông code chảy vào nhau (merge) rồi ĐÂM SẦM (conflict) làm nước bắn tung tóe" },
        { id:"a8", word:"QA", ipa:"/kjuː eɪ/", meaning:"kiểm thử chất lượng", example:"QA found a critical issue before release.", icon:"🧪", mnemonic:"Tưởng tượng 1 người mặc áo giáp trắng đứng chắn cổng, không cho phần mềm lỗi đi qua" },
        { id:"a9", word:"tech debt", ipa:"/tɛk dɛt/", meaning:"nợ kỹ thuật", example:"We need to pay down some tech debt this quarter.", icon:"💳", mnemonic:"Tưởng tượng mỗi lần code ẩu là bạn đang VAY NỢ (debt) ngân hàng kỹ thuật - để lâu lãi mẹ đẻ lãi con" },
        { id:"a10", word:"root cause", ipa:"/rut kɔz/", meaning:"nguyên nhân gốc rễ", example:"Let's find the root cause before fixing it.", icon:"🌳", mnemonic:"Tưởng tượng đào sâu xuống tận RỄ CÂY (root) để tìm ra vì sao cây (vấn đề) lại héo" }
      ],
      phrases: [
        { id:"ap1", phrase:"It's working on my machine.", meaning:"Trên máy tôi vẫn chạy được.", context:"Câu đùa kinh điển của dev.", hook:"Tưởng tượng lập trình viên chỉ tay vào máy MÌNH, cười trừ, mặc kệ máy người khác" },
        { id:"ap2", phrase:"Can you push your changes?", meaning:"Bạn đẩy code lên được không?", context:"", hook:"Tưởng tượng bạn dùng cả 2 tay ĐẨY (push) 1 thùng code lên đám mây" },
        { id:"ap3", phrase:"This is blocked by another task.", meaning:"Việc này đang bị chặn bởi task khác.", context:"", hook:"Tưởng tượng 1 tảng đá to (blocked) chắn ngang đường, phải dọn task kia trước" },
        { id:"ap4", phrase:"Let's spin up a quick call.", meaning:"Mở nhanh 1 cuộc gọi nhé.", context:"", hook:"Tưởng tượng bạn XOAY (spin) 1 nút vặn và cuộc gọi hiện ra ngay tức thì" },
        { id:"ap5", phrase:"I'll take a look and get back to you.", meaning:"Tôi sẽ xem qua rồi phản hồi lại.", context:"", hook:"Tưởng tượng bạn liếc mắt (look) nhìn qua rồi hứa quay lại (get back) trả lời sau" },
        { id:"ap6", phrase:"This is a quick fix, not a permanent solution.", meaning:"Đây là bản vá tạm, chưa phải giải pháp lâu dài.", context:"", hook:"Tưởng tượng miếng băng dán tạm che vết thương, chưa phải phẫu thuật triệt để" }
      ]
    },
    {
      id: "presentations", name: "Thuyết trình & Báo cáo", icon: "📊", color: "#EA580C", category: "work",
      branches: [
        { label: "Cấu trúc bài nói", wordIds: ["pr1","pr9","pr10"] },
        { label: "Điểm nhấn nội dung", wordIds: ["pr2","pr3","pr4","pr5"] },
        { label: "Tương tác khán giả", wordIds: ["pr6","pr7","pr8"] }
      ],
      words: [
        { id:"pr1", word:"overview", ipa:"/ˈoʊvərvjuː/", meaning:"tổng quan", example:"Let me start with a brief overview.", icon:"🔭", mnemonic:"Tưởng tượng bạn bay trực thăng nhìn TOÀN CẢNH (over-view) cả thành phố từ trên cao" },
        { id:"pr2", word:"highlight", ipa:"/ˈhaɪlaɪt/", meaning:"điểm nổi bật", example:"The key highlight this quarter is revenue growth.", icon:"✨", mnemonic:"Tưởng tượng 1 chùm ánh sáng (light) chiếu thẳng từ trên CAO (high) xuống đúng điểm quan trọng nhất" },
        { id:"pr3", word:"milestone", ipa:"/ˈmaɪlstoʊn/", meaning:"cột mốc quan trọng", example:"We hit an important milestone last month.", icon:"🚩", mnemonic:"Tưởng tượng 1 cột đá (stone) đứng bên đường mỗi dặm (mile) để đánh dấu bạn đã đi được bao xa" },
        { id:"pr4", word:"takeaway", ipa:"/ˈteɪkəweɪ/", meaning:"điều rút ra được", example:"The main takeaway is that we need more testing.", icon:"🎯", mnemonic:"Tưởng tượng bạn cầm 1 hộp đồ ăn MANG ĐI (take away) - đó là bài học bạn 'mang về' sau buổi họp" },
        { id:"pr5", word:"trend", ipa:"/trɛnd/", meaning:"xu hướng", example:"There's an upward trend in mobile users.", icon:"📈", mnemonic:"Tưởng tượng cả đám đông đang chạy theo cùng 1 hướng như 1 làn sóng - đó là xu hướng" },
        { id:"pr6", word:"audience", ipa:"/ˈɔdiəns/", meaning:"khán giả/người nghe", example:"Know your audience before preparing slides.", icon:"👥", mnemonic:"Tưởng tượng hàng trăm cái tai đang dỏng lên NGHE (audio) bạn nói - đó là khán giả" },
        { id:"pr7", word:"visual aid", ipa:"/ˈvɪʒuəl eɪd/", meaning:"công cụ trực quan", example:"Use visual aids to explain complex data.", icon:"🖼️", mnemonic:"Tưởng tượng đôi mắt bạn cần 1 cây gậy (aid = hỗ trợ) hình ảnh (visual) để dò đường hiểu bài nhanh hơn" },
        { id:"pr8", word:"Q&A", ipa:"/kjuː ænd eɪ/", meaning:"hỏi đáp", example:"We'll open the floor for Q&A at the end.", icon:"❓", mnemonic:"Tưởng tượng 1 quả bóng bàn bay qua bay lại giữa Câu Hỏi và Câu Trả Lời" },
        { id:"pr9", word:"bottom line", ipa:"/ˈbɑtəm laɪn/", meaning:"kết luận/điểm mấu chốt", example:"The bottom line is we need more budget.", icon:"📉", mnemonic:"Tưởng tượng bạn kéo tờ giấy xuống tận ĐÁY (bottom) trang, dòng cuối cùng đó chính là điều quan trọng nhất" },
        { id:"pr10", word:"rundown", ipa:"/ˈrʌndaʊn/", meaning:"tóm tắt nhanh", example:"Here's a quick rundown of today's topics.", icon:"📃", mnemonic:"Tưởng tượng bạn CHẠY (run) 1 mạch THẲNG XUỐNG (down) hết danh sách ý chính, không dừng lại" }
      ],
      phrases: [
        { id:"prp1", phrase:"As you can see on this slide...", meaning:"Như các bạn thấy trên slide này...", context:"", hook:"Tưởng tượng bạn chỉ tay thẳng vào màn hình như hướng dẫn viên bảo tàng" },
        { id:"prp2", phrase:"I'll keep this brief.", meaning:"Tôi sẽ trình bày ngắn gọn thôi.", context:"", hook:"Tưởng tượng bạn ép chặt bài nói lại thành 1 tờ giấy ngắn (brief) gọn" },
        { id:"prp3", phrase:"Let's dive into the details.", meaning:"Cùng đi sâu vào chi tiết nhé.", context:"", hook:"Tưởng tượng bạn nhảy ùm (dive) xuống hồ sâu để tìm từng viên chi tiết nhỏ dưới đáy" },
        { id:"prp4", phrase:"That's a great question.", meaning:"Đó là 1 câu hỏi hay.", context:"", hook:"Tưởng tượng câu hỏi đó phát sáng lấp lánh như 1 viên kim cương" },
        { id:"prp5", phrase:"To put it simply...", meaning:"Nói đơn giản thì...", context:"", hook:"Tưởng tượng bạn cầm nam châm gạt bỏ hết rối rắm, để lại phần ĐƠN GIẢN nhất" },
        { id:"prp6", phrase:"I'll hand it over to [name].", meaning:"Tôi xin nhường lời cho [tên].", context:"", hook:"Tưởng tượng bạn trao TẬN TAY (hand over) micro cho người tiếp theo" }
      ]
    },
    {
      id: "negotiation", name: "Thương lượng & Thuyết phục", icon: "🤝", color: "#7C3AED", category: "work",
      branches: [
        { label: "Nhượng bộ", wordIds: ["n1","n4","n8"] },
        { label: "Chiến thuật", wordIds: ["n2","n3","n5","n10"] },
        { label: "Ranh giới", wordIds: ["n6","n7","n9"] }
      ],
      words: [
        { id:"n1", word:"compromise", ipa:"/ˈkɑmprəmaɪz/", meaning:"thỏa hiệp", example:"We need to find a compromise both sides accept.", icon:"⚖️", mnemonic:"Tưởng tượng 2 bên cùng đưa tay ra HỨA (promise) CÙNG (com-) nhau nhượng bộ để bắt tay" },
        { id:"n2", word:"leverage", ipa:"/ˈlɛvərɪdʒ/", meaning:"đòn bẩy/tận dụng", example:"We can leverage our existing user base.", icon:"🏋️", mnemonic:"Tưởng tượng dùng 1 cây ĐÒN BẨY (lever) nhấc bổng cả tảng đá nặng bằng chút lực" },
        { id:"n3", word:"trade-off", ipa:"/treɪd ɔf/", meaning:"đánh đổi", example:"There's a trade-off between speed and quality.", icon:"↔️", mnemonic:"Tưởng tượng 1 cái cân, bên này nặng lên thì bên kia phải nhẹ đi - đánh đổi qua lại" },
        { id:"n4", word:"concession", ipa:"/kənˈsɛʃən/", meaning:"sự nhượng bộ", example:"We made a small concession on the price.", icon:"🤲", mnemonic:"Tưởng tượng bạn nhường hẳn 1 miếng bánh của mình cho đối phương để giữ hòa khí" },
        { id:"n5", word:"counteroffer", ipa:"/ˈkaʊntərɔfər/", meaning:"đề nghị phản hồi lại", example:"They sent a counteroffer with a longer timeline.", icon:"🔄", mnemonic:"Tưởng tượng 1 quả bóng offer ném qua, bạn ĐÁNH TRẢ (counter) lại 1 quả bóng khác về phía họ" },
        { id:"n6", word:"win-win", ipa:"/wɪn wɪn/", meaning:"hai bên cùng có lợi", example:"Let's aim for a win-win solution.", icon:"🏆", mnemonic:"Tưởng tượng 2 đội cùng giơ cúp vàng lên ăn mừng 1 lúc - không ai thua cả" },
        { id:"n7", word:"non-negotiable", ipa:"/nɑn nɪˈgoʊʃiəbəl/", meaning:"không thể thương lượng", example:"The security requirement is non-negotiable.", icon:"🚫", mnemonic:"Tưởng tượng 1 bức tường sắt không có cửa (non) để mặc cả (negotiable)" },
        { id:"n8", word:"flexible", ipa:"/ˈflɛksəbəl/", meaning:"linh hoạt", example:"We're flexible on the delivery date.", icon:"🤸", mnemonic:"Tưởng tượng 1 cọng dây thun (flex) kéo dài ra sao cũng được mà không đứt" },
        { id:"n9", word:"deal-breaker", ipa:"/diːl breɪkər/", meaning:"yếu tố khiến thỏa thuận đổ vỡ", example:"Price is not a deal-breaker for us.", icon:"💥", mnemonic:"Tưởng tượng 1 cái búa (breaker) đập vỡ tan cái bắt tay thỏa thuận (deal) chỉ vì 1 điều" },
        { id:"n10", word:"stall", ipa:"/stɔl/", meaning:"trì hoãn/câu giờ", example:"They're stalling to get a better deal.", icon:"⏳", mnemonic:"Tưởng tượng con ngựa đứng khựng lại trong CHUỒNG (stall) không chịu bước tiếp" }
      ],
      phrases: [
        { id:"np1", phrase:"Let's find a middle ground.", meaning:"Hãy tìm điểm chung nhé.", context:"", hook:"Tưởng tượng 2 người đào đường hầm từ 2 phía, gặp nhau đúng GIỮA (middle) đường" },
        { id:"np2", phrase:"What if we met halfway?", meaning:"Nếu chúng ta gặp nhau ở giữa thì sao?", context:"", hook:"Tưởng tượng 2 người đi bộ ngược chiều, dừng lại bắt tay đúng NỬA ĐƯỜNG (halfway)" },
        { id:"np3", phrase:"I'm afraid that doesn't work for us.", meaning:"E là điều đó không phù hợp với chúng tôi.", context:"", hook:"Tưởng tượng bạn nhăn mặt SỢ HÃI (afraid) nhẹ khi phải từ chối khéo" },
        { id:"np4", phrase:"Can we revisit the terms?", meaning:"Chúng ta có thể xem lại điều khoản không?", context:"", hook:"Tưởng tượng bạn quay lại THĂM LẠI (revisit) đúng trang hợp đồng cũ để đọc lại" },
        { id:"np5", phrase:"That's a fair point.", meaning:"Đó là 1 ý hợp lý.", context:"", hook:"Tưởng tượng bạn gật đầu công nhận vì cán cân (fair = công bằng) đang thăng bằng" },
        { id:"np6", phrase:"Let's put this in writing.", meaning:"Hãy ghi lại bằng văn bản nhé.", context:"", hook:"Tưởng tượng lời nói bay hơi biến thành mực CHỮ VIẾT in hẳn trên giấy để làm bằng chứng" }
      ]
    },
    {
      id: "calls_meetings", name: "Gọi điện & Họp online", icon: "📞", color: "#0891B2", category: "work",
      branches: [
        { label: "Sự cố kỹ thuật", wordIds: ["c1","c2","c7","c8","c10"] },
        { label: "Tổ chức cuộc gọi", wordIds: ["c3","c4","c5","c6","c9"] }
      ],
      words: [
        { id:"c1", word:"mute", ipa:"/mjut/", meaning:"tắt tiếng", example:"You're on mute, can you unmute?", icon:"🔇", mnemonic:"Tưởng tượng bạn bấm nút và cả căn phòng CÂM LẶNG (mute) ngay tức khắc" },
        { id:"c2", word:"lag", ipa:"/læg/", meaning:"độ trễ", example:"There's some lag in the connection.", icon:"🐌", mnemonic:"Tưởng tượng bạn nói trước, nhưng âm thanh cứ ì ạch KÉO LÊ (lag) phía sau mãi mới tới" },
        { id:"c3", word:"dial in", ipa:"/ˈdaɪəl ɪn/", meaning:"gọi vào (cuộc họp)", example:"Please dial in five minutes early.", icon:"☎️", mnemonic:"Tưởng tượng ngón tay đang XOAY (dial) 1 cái đĩa số điện thoại cổ để quay VÀO (in) cuộc gọi" },
        { id:"c4", word:"reschedule", ipa:"/riˈskɛdʒuːl/", meaning:"dời lịch", example:"Can we reschedule to tomorrow afternoon?", icon:"📅", mnemonic:"Tưởng tượng cuốn lịch (schedule) bị xé ra viết LẠI (re-) 1 lần nữa vì đổi giờ" },
        { id:"c5", word:"breakout room", ipa:"/ˈbreɪkaʊt rum/", meaning:"phòng họp nhóm nhỏ", example:"We'll split into breakout rooms for discussion.", icon:"🚪", mnemonic:"Tưởng tượng cả nhóm lớn bất ngờ TÁCH RA (break out) thành từng phòng nhỏ để thảo luận riêng" },
        { id:"c6", word:"screen share", ipa:"/skrin ʃɛr/", meaning:"chia sẻ màn hình", example:"Can you share your screen?", icon:"🖥️", mnemonic:"Tưởng tượng màn hình máy tính bạn được nhân bản, CHIA SẺ hình ảnh y hệt sang máy người khác" },
        { id:"c7", word:"freeze", ipa:"/friz/", meaning:"đơ/đứng hình", example:"Your video just froze for a second.", icon:"🥶", mnemonic:"Tưởng tượng khuôn mặt bạn trên video đột nhiên bị ĐÓNG BĂNG (freeze) cứng đờ như tượng" },
        { id:"c8", word:"connection drop", ipa:"/kəˈnɛkʃən drɑp/", meaning:"rớt kết nối", example:"I got disconnected, sorry for the connection drop.", icon:"📉", mnemonic:"Tưởng tượng sợi dây kết nối bị đứt phựt, RỚT (drop) thẳng xuống đất" },
        { id:"c9", word:"agenda item", ipa:"/əˈdʒɛndə ˈaɪtəm/", meaning:"mục trong chương trình họp", example:"Let's move to the next agenda item.", icon:"📌", mnemonic:"Tưởng tượng bạn gạch từng dòng (item) trong danh sách (agenda) rồi chuyển sang dòng kế tiếp" },
        { id:"c10", word:"background noise", ipa:"/ˈbækgraʊnd nɔɪz/", meaning:"tiếng ồn xung quanh", example:"Sorry about the background noise.", icon:"🔊", mnemonic:"Tưởng tượng 1 dàn nhạc ồn ào đang chơi ở phía SAU LƯNG (background) bạn trong lúc họp" }
      ],
      phrases: [
        { id:"cp1", phrase:"Can you hear me now?", meaning:"Bây giờ bạn nghe tôi không?", context:"", hook:"Tưởng tượng bạn gõ gõ vào tai nghe để chắc chắn âm thanh đã thông" },
        { id:"cp2", phrase:"You're breaking up a little.", meaning:"Giọng bạn bị đứt quãng chút.", context:"", hook:"Tưởng tượng giọng nói bị vỡ (breaking up) thành từng mảnh nhỏ rồi rớt xuống" },
        { id:"cp3", phrase:"Let me share my screen.", meaning:"Để tôi chia sẻ màn hình.", context:"", hook:"Tưởng tượng màn hình bạn tách đôi (share) và bay 1 bản sang máy người khác" },
        { id:"cp4", phrase:"Sorry, I was on mute.", meaning:"Xin lỗi, tôi vừa để tắt tiếng.", context:"", hook:"Tưởng tượng miệng bạn bị dán băng keo (mute) mà bạn quên mất" },
        { id:"cp5", phrase:"I'll send the recording afterward.", meaning:"Tôi sẽ gửi bản ghi hình sau.", context:"", hook:"Tưởng tượng cuộn băng ghi âm được gói lại gửi đi SAU (afterward) buổi họp" },
        { id:"cp6", phrase:"Can everyone see my screen okay?", meaning:"Mọi người thấy màn hình tôi rõ không?", context:"", hook:"Tưởng tượng hàng chục con mắt nhỏ trong các ô vuông Zoom đang dán vào màn hình bạn" }
      ]
    },
    {
      id: "troubleshooting", name: "Xử lý sự cố & Hỗ trợ", icon: "🛠️", color: "#B91C1C", category: "work",
      branches: [
        { label: "Phát hiện vấn đề", wordIds: ["t1","t2","t5","t4"] },
        { label: "Xử lý & khắc phục", wordIds: ["t3","t8","t10","t6"] },
        { label: "Phản ứng khẩn cấp", wordIds: ["t7","t9"] }
      ],
      words: [
        { id:"t1", word:"issue", ipa:"/ˈɪʃuː/", meaning:"vấn đề/sự cố", example:"We're looking into the issue now.", icon:"⚠️", mnemonic:"Tưởng tượng 1 tia lửa nhỏ vừa lóe lên từ hệ thống - chưa cháy lớn nhưng cần chú ý ngay" },
        { id:"t2", word:"glitch", ipa:"/glɪtʃ/", meaning:"trục trặc nhỏ", example:"There was a minor glitch in the app.", icon:"⚡", mnemonic:"Tưởng tượng màn hình giật NHẤP NHÁY (glitch) đúng 1 giây rồi trở lại bình thường" },
        { id:"t3", word:"workaround", ipa:"/ˈwɜrkəraʊnd/", meaning:"giải pháp tạm thời", example:"Here's a workaround until the fix is deployed.", icon:"🔀", mnemonic:"Tưởng tượng con đường chính bị chặn, bạn phải ĐI VÒNG (around) qua đường LÀM VIỆC (work) tạm khác" },
        { id:"t4", word:"reproduce", ipa:"/riprəˈdus/", meaning:"tái tạo lại (lỗi)", example:"I can't reproduce the bug on my end.", icon:"🔁", mnemonic:"Tưởng tượng bạn bấm nút PHOTOCOPY (re-produce) chính xác y hệt lỗi cũ lần nữa để kiểm tra" },
        { id:"t5", word:"incident", ipa:"/ˈɪnsɪdənt/", meaning:"sự cố nghiêm trọng", example:"This is a P1 incident, all hands on deck.", icon:"🚨", mnemonic:"Tưởng tượng còi báo động đỏ rú vang khắp tòa nhà - có 1 sự cố nghiêm trọng vừa xảy ra" },
        { id:"t6", word:"root cause analysis", ipa:"/rut kɔz əˈnæləsɪs/", meaning:"phân tích nguyên nhân gốc", example:"We'll do a root cause analysis after this is resolved.", icon:"🔬", mnemonic:"Tưởng tượng bạn cầm xẻng đào xuống tận RỄ (root) để mổ xẻ tìm nguyên nhân thật sự" },
        { id:"t7", word:"escalation", ipa:"/ɛskəˈleɪʃən/", meaning:"việc đẩy vấn đề lên cấp cao hơn", example:"This requires escalation to the infra team.", icon:"📶", mnemonic:"Tưởng tượng vấn đề đang leo lên CẦU THANG CUỐN (escalator) chạy thẳng tới bàn sếp lớn" },
        { id:"t8", word:"patch", ipa:"/pætʃ/", meaning:"bản vá", example:"We released a patch to fix the crash.", icon:"🩹", mnemonic:"Tưởng tượng 1 miếng vá được dán chồng lên đúng chỗ rách trên quần jean" },
        { id:"t9", word:"all hands on deck", ipa:"/ɔl hændz ɑn dɛk/", meaning:"huy động toàn lực", example:"It's all hands on deck until this is fixed.", icon:"🚢", mnemonic:"Tưởng tượng thuyền trưởng hét lên, MỌI BÀN TAY đều phải chạy LÊN BOONG TÀU ngay lập tức" },
        { id:"t10", word:"troubleshoot", ipa:"/ˈtrʌbəlʃut/", meaning:"khắc phục sự cố", example:"Let's troubleshoot this step by step.", icon:"🔧", mnemonic:"Tưởng tượng bạn cầm súng (shoot) bắn hạ từng RẮC RỐI (trouble) một cho tới khi hết lỗi" }
      ],
      phrases: [
        { id:"tp1", phrase:"We're currently investigating the issue.", meaning:"Chúng tôi đang điều tra sự cố.", context:"", hook:"Tưởng tượng 1 thám tử đeo kính lúp đang lần theo dấu vết sự cố" },
        { id:"tp2", phrase:"It should be resolved shortly.", meaning:"Sẽ được khắc phục sớm thôi.", context:"", hook:"Tưởng tượng nút thắt rối được tháo gỡ (resolve) chỉ trong chớp mắt (shortly)" },
        { id:"tp3", phrase:"Can you walk me through the steps?", meaning:"Bạn hướng dẫn tôi từng bước được không?", context:"", hook:"Tưởng tượng bạn nắm tay ai đó DẮT ĐI (walk through) từng bậc thang (steps) một" },
        { id:"tp4", phrase:"This has been fixed and deployed.", meaning:"Cái này đã được sửa và triển khai.", context:"", hook:"Tưởng tượng vết nứt được hàn (fixed) xong rồi tên lửa (deployed) phóng đi luôn" },
        { id:"tp5", phrase:"Let's keep an eye on it.", meaning:"Hãy theo dõi sát vấn đề này.", context:"", hook:"Tưởng tượng 1 con mắt luôn mở to theo dõi không rời vấn đề đó" },
        { id:"tp6", phrase:"Thanks for flagging this.", meaning:"Cảm ơn bạn đã báo vấn đề này.", context:"", hook:"Tưởng tượng ai đó cắm 1 lá cờ đỏ lên đúng chỗ có vấn đề để báo hiệu" }
      ]
    },
    {
      id: "feedback_review", name: "Phản hồi & Đánh giá công việc", icon: "🗣️", color: "#CA8A04", category: "work",
      branches: [
        { label: "Điểm cần nói", wordIds: ["f2","f3","f4"] },
        { label: "Cách góp ý", wordIds: ["f1","f9","f6"] },
        { label: "Tự đánh giá & mục tiêu", wordIds: ["f7","f8","f10","f5"] }
      ],
      words: [
        { id:"f1", word:"constructive", ipa:"/kənˈstrʌktɪv/", meaning:"mang tính xây dựng", example:"Please give me constructive feedback.", icon:"🏗️", mnemonic:"Tưởng tượng lời góp ý được XÂY (construct) thành 1 tòa nhà vững chắc hơn, không phải đập phá" },
        { id:"f2", word:"strength", ipa:"/strɛŋθ/", meaning:"điểm mạnh", example:"Communication is one of your strengths.", icon:"💪", mnemonic:"Tưởng tượng bạn gồng cơ tay khoe SỨC MẠNH (strength) - đó chính là điểm mạnh của bạn" },
        { id:"f3", word:"area for improvement", ipa:"/ˈɛriə fɔr ɪmˈpruvmənt/", meaning:"điểm cần cải thiện", example:"Time management is an area for improvement.", icon:"📈", mnemonic:"Tưởng tượng 1 khu đất (area) đang được cải tạo (improve) để tốt đẹp hơn" },
        { id:"f4", word:"accomplishment", ipa:"/əˈkɑmplɪʃmənt/", meaning:"thành tựu", example:"List your key accomplishments this year.", icon:"🏅", mnemonic:"Tưởng tượng bạn giơ cúp vàng lên sau khi HOÀN THÀNH (accomplish) 1 chặng đua dài" },
        { id:"f5", word:"underperform", ipa:"/ʌndərpərˈfɔrm/", meaning:"làm việc dưới kỳ vọng", example:"The team underperformed this quarter.", icon:"📉", mnemonic:"Tưởng tượng bạn nhảy không cao bằng cây gậy đo ở DƯỚI (under) mức yêu cầu" },
        { id:"f6", word:"recognition", ipa:"/rɛkəgˈnɪʃən/", meaning:"sự công nhận", example:"She received recognition for her hard work.", icon:"🏆", mnemonic:"Tưởng tượng cả hội trường đứng dậy vỗ tay, NHẬN RA và tôn vinh bạn" },
        { id:"f7", word:"self-assessment", ipa:"/sɛlf əˈsɛsmənt/", meaning:"tự đánh giá", example:"Please complete your self-assessment by Friday.", icon:"🪞", mnemonic:"Tưởng tượng bạn cầm gương tự soi (self) và tự chấm điểm chính mình" },
        { id:"f8", word:"objective", ipa:"/əbˈdʒɛktɪv/", meaning:"mục tiêu", example:"Let's set clear objectives for next quarter.", icon:"🎯", mnemonic:"Tưởng tượng 1 mũi tên bắn thẳng tới đúng tâm bia (object = mục tiêu)" },
        { id:"f9", word:"candid", ipa:"/ˈkændɪd/", meaning:"thẳng thắn", example:"I'd like to be candid with you about this.", icon:"🗣️", mnemonic:"Tưởng tượng bạn tháo hết mặt nạ, nói thẳng không che giấu điều gì" },
        { id:"f10", word:"growth mindset", ipa:"/groʊθ ˈmaɪndsɛt/", meaning:"tư duy cầu tiến", example:"She approaches challenges with a growth mindset.", icon:"🌱", mnemonic:"Tưởng tượng 1 mầm cây (growth) đang vươn lên trong đầu (mindset) bạn mỗi ngày một cao hơn" }
      ],
      phrases: [
        { id:"fp1", phrase:"Can I give you some feedback?", meaning:"Tôi góp ý cho bạn được không?", context:"", hook:"Tưởng tượng bạn nhẹ nhàng trao (give) 1 món quà góp ý, không phải ném đá" },
        { id:"fp2", phrase:"You did a great job on this.", meaning:"Bạn đã làm rất tốt việc này.", context:"", hook:"Tưởng tượng bạn giơ ngón tay cái to đùng (great) khen ngợi" },
        { id:"fp3", phrase:"I'd like to see more of that.", meaning:"Tôi muốn thấy nhiều hơn như vậy.", context:"", hook:"Tưởng tượng bạn xòe tay xin THÊM (more) 1 lần nữa điều tốt đó" },
        { id:"fp4", phrase:"Let's set some clear expectations.", meaning:"Hãy đặt ra kỳ vọng rõ ràng.", context:"", hook:"Tưởng tượng bạn treo 1 tấm biển thật RÕ RÀNG (clear) ghi rõ kỳ vọng" },
        { id:"fp5", phrase:"I appreciate your hard work.", meaning:"Tôi trân trọng sự nỗ lực của bạn.", context:"", hook:"Tưởng tượng bạn cúi đầu trân trọng giọt mồ hôi (hard work) của người khác" },
        { id:"fp6", phrase:"What would you do differently next time?", meaning:"Lần sau bạn sẽ làm khác đi thế nào?", context:"", hook:"Tưởng tượng bạn tua lại cuốn phim và thử tưởng tượng 1 cái kết KHÁC (differently)" }
      ]
    },
    {
      id: "smalltalk_daily", name: "Giao tiếp xã giao & Đời sống công sở", icon: "☕", color: "#65A30D", category: "work",
      branches: [
        { label: "Hỏi thăm", wordIds: ["s1","s2","s7"] },
        { label: "Đời sống công sở", wordIds: ["s3","s4","s5","s10"] },
        { label: "Kết nối đồng nghiệp", wordIds: ["s6","s8","s9"] }
      ],
      words: [
        { id:"s1", word:"catch up", ipa:"/kætʃ ʌp/", meaning:"trò chuyện cập nhật", example:"We should catch up over coffee sometime.", icon:"☕", mnemonic:"Tưởng tượng bạn chạy đuổi theo BẮT KỊP (catch up) người bạn lâu ngày không gặp để nghe kể chuyện" },
        { id:"s2", word:"weekend", ipa:"/ˈwikɛnd/", meaning:"cuối tuần", example:"How was your weekend?", icon:"🌞", mnemonic:"Tưởng tượng tuần làm việc (week) chạy tới vạch ĐÍCH (end) - đó là 2 ngày nghỉ ngơi" },
        { id:"s3", word:"commute", ipa:"/kəˈmjut/", meaning:"di chuyển đi làm", example:"My commute takes about 30 minutes.", icon:"🚗", mnemonic:"Tưởng tượng bạn lặp đi lặp lại hành trình đi-về mỗi ngày như 1 cái máy" },
        { id:"s4", word:"burnout", ipa:"/ˈbɜrnaʊt/", meaning:"kiệt sức vì công việc", example:"He's feeling a bit of burnout lately.", icon:"🔥", mnemonic:"Tưởng tượng ngọn nến trong bạn CHÁY (burn) tới hết sạch (out), không còn tí năng lượng nào" },
        { id:"s5", word:"work-life balance", ipa:"/wɜrk laɪf ˈbæləns/", meaning:"cân bằng công việc-cuộc sống", example:"It's important to maintain work-life balance.", icon:"⚖️", mnemonic:"Tưởng tượng bạn giữ thăng bằng (balance) trên 1 cái cân, 1 bên là việc, 1 bên là cuộc sống" },
        { id:"s6", word:"get along", ipa:"/gɛt əˈlɔŋ/", meaning:"hòa hợp với nhau", example:"I get along well with my teammates.", icon:"🤗", mnemonic:"Tưởng tượng 2 người bước ĐI CÙNG NHỊP (along) trên cùng 1 con đường - hòa hợp" },
        { id:"s7", word:"small talk", ipa:"/smɔl tɔk/", meaning:"chuyện phiếm", example:"He's good at small talk with clients.", icon:"💬", mnemonic:"Tưởng tượng những bong bóng lời nói nhỏ xíu (small) bay lơ lửng trong buổi tán gẫu không đầu không cuối" },
        { id:"s8", word:"hang out", ipa:"/hæŋ aʊt/", meaning:"đi chơi/tụ tập", example:"Let's hang out after work sometime.", icon:"🎉", mnemonic:"Tưởng tượng bạn TREO MÌNH (hang) lửng lơ chơi bời NGOÀI (out) đường phố với bạn bè" },
        { id:"s9", word:"day off", ipa:"/deɪ ɔf/", meaning:"ngày nghỉ", example:"I'm taking a day off tomorrow.", icon:"🏖️", mnemonic:"Tưởng tượng bạn tắt (off) hẳn công tắc công việc trong đúng 1 ngày (day)" },
        { id:"s10", word:"in a rut", ipa:"/ɪn ə rʌt/", meaning:"cảm giác nhàm chán, bế tắc", example:"I feel like I'm in a rut at work lately.", icon:"🕳️", mnemonic:"Tưởng tượng bánh xe cứ lún mãi trong 1 VỆT LÕM (rut) trên đường, không thoát ra được" }
      ],
      phrases: [
        { id:"sp1", phrase:"How's it going?", meaning:"Dạo này thế nào?", context:"", hook:"Tưởng tượng bạn giơ tay hỏi thăm nhẹ nhàng như 1 câu chào cửa miệng" },
        { id:"sp2", phrase:"Long time no see!", meaning:"Lâu rồi không gặp!", context:"", hook:"Tưởng tượng khoảng thời gian dài như sợi dây kéo căng giữa 2 lần gặp" },
        { id:"sp3", phrase:"What have you been up to?", meaning:"Dạo này bạn làm gì rồi?", context:"", hook:"Tưởng tượng bạn tò mò ngó xem dạo này người kia đang BẬN RỘN (up to) với gì" },
        { id:"sp4", phrase:"It's been a crazy week.", meaning:"Tuần này bận điên luôn.", context:"", hook:"Tưởng tượng cả tuần quay cuồng (crazy) như vòng đu quay không phanh" },
        { id:"sp5", phrase:"Let's grab lunch sometime.", meaning:"Hôm nào đi ăn trưa nhé.", context:"", hook:"Tưởng tượng bạn TÓM LẤY (grab) nhanh 1 bữa trưa giữa lịch bận rộn" },
        { id:"sp6", phrase:"Same here.", meaning:"Tôi cũng vậy.", context:"", hook:"Tưởng tượng bạn giơ gương phản chiếu lại y hệt (same) điều vừa nghe" }
      ]
    },
    {
      id: "travel_social", name: "Du lịch & Giao tiếp xã hội", icon: "✈️", color: "#0D9488", category: "life",
      branches: [
        { label: "Di chuyển", wordIds: ["tr1","tr2","tr10","tr5"] },
        { label: "Thủ tục & đặt chỗ", wordIds: ["tr3","tr4"] },
        { label: "Trải nghiệm địa phương", wordIds: ["tr6","tr7","tr8","tr9"] }
      ],
      words: [
        { id:"tr1", word:"itinerary", ipa:"/aɪˈtɪnərɛri/", meaning:"lịch trình", example:"Here's our itinerary for the trip.", icon:"🗺️", mnemonic:"Tưởng tượng 1 tấm bản đồ dài dằng dặc ghi rõ TỪNG ĐIỂM bạn sẽ đi qua trên chuyến đi" },
        { id:"tr2", word:"layover", ipa:"/ˈleɪoʊvər/", meaning:"quá cảnh", example:"We have a 3-hour layover in Bangkok.", icon:"🛬", mnemonic:"Tưởng tượng bạn NẰM (lay) vật ra ghế sân bay chờ QUA (over) 1 chặng transit giữa đường" },
        { id:"tr3", word:"check in", ipa:"/tʃɛk ɪn/", meaning:"làm thủ tục (khách sạn/sân bay)", example:"What time can we check in?", icon:"🛎️", mnemonic:"Tưởng tượng bạn đưa hộ chiếu, nhân viên tích (check) 1 dấu vào ô để cho bạn VÀO (in)" },
        { id:"tr4", word:"reservation", ipa:"/rɛzərˈveɪʃən/", meaning:"đặt chỗ", example:"I'd like to make a reservation for two.", icon:"📖", mnemonic:"Tưởng tượng có người đã cắm cờ GIỮ CHỖ (reserve) sẵn cho bạn từ trước" },
        { id:"tr5", word:"fare", ipa:"/fɛr/", meaning:"giá vé", example:"The train fare is cheaper than the bus.", icon:"🎫", mnemonic:"Tưởng tượng bạn trả 1 khoản PHÍ (fare gần giống fee) để được lên xe/tàu" },
        { id:"tr6", word:"souvenir", ipa:"/suvəˈnɪr/", meaning:"quà lưu niệm", example:"I bought some souvenirs for my family.", icon:"🎁", mnemonic:"Tưởng tượng mỗi món quà nhỏ giúp bạn NHỚ LẠI (gốc Pháp: se souvenir) cả chuyến đi" },
        { id:"tr7", word:"sightseeing", ipa:"/ˈsaɪtsiɪŋ/", meaning:"tham quan", example:"We spent the day sightseeing downtown.", icon:"🏛️", mnemonic:"Tưởng tượng đôi mắt bạn (sight) đang NHÌN (seeing) không ngừng nghỉ hết cảnh này tới cảnh khác" },
        { id:"tr8", word:"jet lag", ipa:"/dʒɛt læg/", meaning:"mệt do lệch múi giờ", example:"I'm still recovering from jet lag.", icon:"🥱", mnemonic:"Tưởng tượng cơ thể bạn bay bằng MÁY BAY PHẢN LỰC (jet) nhanh hơn cả đồng hồ sinh học, nên bị TRỄ NHỊP (lag)" },
        { id:"tr9", word:"local cuisine", ipa:"/ˈloʊkəl kwɪˈzin/", meaning:"ẩm thực địa phương", example:"Try the local cuisine while you're there.", icon:"🍜", mnemonic:"Tưởng tượng 1 nồi lẩu đang sôi sùng sục, mang hương vị riêng của ĐỊA PHƯƠNG (local) đó" },
        { id:"tr10", word:"get around", ipa:"/gɛt əˈraʊnd/", meaning:"di chuyển loanh quanh", example:"It's easy to get around the city by metro.", icon:"🚕", mnemonic:"Tưởng tượng bạn xoay vòng vòng (around) khắp thành phố bằng đủ loại phương tiện" }
      ],
      phrases: [
        { id:"trp1", phrase:"Could you recommend a good place to eat?", meaning:"Bạn giới thiệu chỗ ăn ngon được không?", context:"", hook:"Tưởng tượng người địa phương chỉ tay (recommend) về hướng có mùi thơm bay ra" },
        { id:"trp2", phrase:"How do I get to the airport from here?", meaning:"Từ đây đến sân bay đi thế nào?", context:"", hook:"Tưởng tượng 1 mũi tên trên bản đồ chỉ thẳng từ chỗ bạn đứng tới sân bay" },
        { id:"trp3", phrase:"Is this seat taken?", meaning:"Chỗ này có ai ngồi chưa?", context:"", hook:"Tưởng tượng bạn gõ nhẹ vào ghế trống xem có ai đã 'chiếm' (taken) chưa" },
        { id:"trp4", phrase:"I'm just looking, thanks.", meaning:"Tôi chỉ xem thôi, cảm ơn.", context:"", hook:"Tưởng tượng mắt bạn lướt (looking) nhẹ qua các món hàng mà tay không chạm vào" },
        { id:"trp5", phrase:"Could you take a photo of us?", meaning:"Bạn chụp giúp bọn tôi tấm hình được không?", context:"", hook:"Tưởng tượng bạn đưa điện thoại nhờ người lạ BẤM (take) giúp 1 tấm ảnh" },
        { id:"trp6", phrase:"Nice to meet you.", meaning:"Rất vui được gặp bạn.", context:"", hook:"Tưởng tượng 2 bàn tay vừa chạm nhau lần đầu tiên, nở nụ cười" }
      ]
    },
    {
      id: "family_friends", name: "Gia đình & Bạn bè", icon: "👨‍👩‍👧‍👦", color: "#F4A261", category: "life",
      branches: [
        { label: "Người thân", wordIds: ["ff1","ff2","ff8","ff9"] },
        { label: "Nuôi dạy & gắn kết", wordIds: ["ff3","ff10","ff7"] },
        { label: "Duy trì mối quan hệ", wordIds: ["ff4","ff5","ff6"] }
      ],
      words: [
        { id:"ff1", word:"sibling", ipa:"/ˈsɪblɪŋ/", meaning:"anh chị em ruột", example:"I have two siblings, a brother and a sister.", icon:"👫", mnemonic:"Tưởng tượng 2 đứa trẻ giống hệt (similar) nhau đang cãi nhau tranh đồ chơi" },
        { id:"ff2", word:"in-laws", ipa:"/ˈɪn lɔz/", meaning:"gia đình bên vợ/chồng", example:"We're having dinner with my in-laws this weekend.", icon:"👨‍👩‍👧", mnemonic:"Tưởng tượng 1 cuốn LUẬT (law) hôn nhân vừa biến người lạ TRỞ THÀNH (in) người nhà bạn" },
        { id:"ff3", word:"raise", ipa:"/reɪz/", meaning:"nuôi dạy (con)", example:"They raised three kids in a small town.", icon:"👶", mnemonic:"Tưởng tượng bạn NÂNG (raise) 1 đứa trẻ lên cao dần theo năm tháng cho tới khi trưởng thành" },
        { id:"ff4", word:"get together", ipa:"/gɛt təˈgɛðər/", meaning:"tụ họp", example:"Let's get together for a family reunion.", icon:"🎉", mnemonic:"Tưởng tượng cả gia đình từ khắp nơi bay VỀ CÙNG (together) 1 chỗ để tụ họp" },
        { id:"ff5", word:"close friend", ipa:"/kloʊs frɛnd/", meaning:"bạn thân", example:"She's been my close friend since college.", icon:"🤝", mnemonic:"Tưởng tượng 2 người đứng sát (close) nhau đến mức không còn khoảng cách" },
        { id:"ff6", word:"keep in touch", ipa:"/kip ɪn tʌtʃ/", meaning:"giữ liên lạc", example:"We still keep in touch after all these years.", icon:"📱", mnemonic:"Tưởng tượng 2 bàn tay vẫn GIỮ (keep) nguyên việc chạm (touch) nhau dù cách xa ngàn dặm" },
        { id:"ff7", word:"childhood", ipa:"/ˈtʃaɪldhʊd/", meaning:"thời thơ ấu", example:"We grew up together since childhood.", icon:"🧒", mnemonic:"Tưởng tượng cả 1 THỜI KỲ (hood) khi bạn còn là đứa trẻ (child) nghịch ngợm" },
        { id:"ff8", word:"relative", ipa:"/ˈrɛlətɪv/", meaning:"họ hàng", example:"Many relatives came to the wedding.", icon:"👪", mnemonic:"Tưởng tượng 1 sợi dây vô hình nối (relation) máu mủ giữa bạn và họ hàng" },
        { id:"ff9", word:"take after", ipa:"/teɪk ˈæftər/", meaning:"giống (ai đó trong nhà)", example:"She takes after her mother.", icon:"🧬", mnemonic:"Tưởng tượng bạn ĐI THEO SAU (after) rồi LẤY (take) y hệt nét mặt của mẹ mình" },
        { id:"ff10", word:"bond", ipa:"/bɑnd/", meaning:"gắn kết", example:"They share a strong bond as brothers.", icon:"❤️", mnemonic:"Tưởng tượng 1 cuộn BĂNG DÍNH siêu chắc dán chặt 2 anh em lại với nhau mãi mãi" }
      ],
      phrases: [
        { id:"ffp1", phrase:"How's the family doing?", meaning:"Gia đình dạo này thế nào?", context:"", hook:"Tưởng tượng bạn hỏi thăm cả nhà bằng 1 câu ấm áp như ôm từ xa" },
        { id:"ffp2", phrase:"We should catch up soon.", meaning:"Chúng ta nên gặp nhau sớm nhé.", context:"", hook:"Tưởng tượng lịch hẹn đang treo lơ lửng chờ được đánh dấu ngày gặp" },
        { id:"ffp3", phrase:"It runs in the family.", meaning:"Cái đó là 'gen di truyền' trong nhà.", context:"Dùng khi 1 tính cách/thói quen lặp lại qua các thế hệ.", hook:"Tưởng tượng 1 đặc điểm CHẠY (runs) xuyên suốt từ đời ông tới đời cháu như dòng sông chảy mãi" },
        { id:"ffp4", phrase:"I'm really close to my family.", meaning:"Tôi rất thân thiết với gia đình.", context:"", hook:"Tưởng tượng khoảng cách (close = gần) giữa bạn và gia đình gần như bằng 0" },
        { id:"ffp5", phrase:"Let's plan a family trip.", meaning:"Cùng lên kế hoạch đi chơi cả nhà nhé.", context:"", hook:"Tưởng tượng cả nhà quây quần vẽ chung 1 bản đồ chuyến đi" },
        { id:"ffp6", phrase:"We don't get to see each other much.", meaning:"Bọn tôi ít có dịp gặp nhau.", context:"", hook:"Tưởng tượng lịch gặp nhau chỉ còn vài chấm nhỏ thưa thớt trên cuốn lịch" }
      ]
    },
    {
      id: "shopping_dining", name: "Mua sắm & Ăn uống", icon: "🛍️", color: "#E76F51", category: "life",
      branches: [
        { label: "Mua sắm", wordIds: ["sd1","sd2","sd3","sd4"] },
        { label: "Gọi món & thanh toán", wordIds: ["sd5","sd6","sd8"] },
        { label: "Ăn uống", wordIds: ["sd7","sd9","sd10"] }
      ],
      words: [
        { id:"sd1", word:"bargain", ipa:"/ˈbɑrgɪn/", meaning:"món hời/mặc cả", example:"I got this jacket for a bargain price.", icon:"💰", mnemonic:"Tưởng tượng bạn 'BẮT' được 1 món hời, LÃI (gain) to đùng khi mặc cả thành công" },
        { id:"sd2", word:"receipt", ipa:"/rɪˈsit/", meaning:"hóa đơn", example:"Keep the receipt in case you need to return it.", icon:"🧾", mnemonic:"Tưởng tượng tờ giấy xác NHẬN (receive) bạn đã thanh toán xong, giữ lại phòng khi cần đổi trả" },
        { id:"sd3", word:"refund", ipa:"/ˈriːfʌnd/", meaning:"hoàn tiền", example:"Can I get a refund for this?", icon:"💵", mnemonic:"Tưởng tượng cửa hàng TRẢ LẠI (re-) đúng số TIỀN (fund) vào tay bạn" },
        { id:"sd4", word:"try on", ipa:"/traɪ ɑn/", meaning:"mặc thử", example:"Can I try this on?", icon:"👕", mnemonic:"Tưởng tượng bạn THỬ (try) khoác chiếc áo LÊN NGƯỜI (on) trước gương xem có vừa không" },
        { id:"sd5", word:"order", ipa:"/ˈɔrdər/", meaning:"gọi món", example:"Are you ready to order?", icon:"🍽️", mnemonic:"Tưởng tượng bạn giơ tay RA LỆNH (order) cho phục vụ mang đúng món mình muốn" },
        { id:"sd6", word:"reservation", ipa:"/rɛzərˈveɪʃən/", meaning:"đặt bàn", example:"I'd like to make a reservation for 7pm.", icon:"📖", mnemonic:"Tưởng tượng có người đã cắm cờ GIỮ CHỖ (reserve) sẵn 1 cái bàn đẹp nhất nhà hàng cho bạn" },
        { id:"sd7", word:"takeout", ipa:"/ˈteɪkaʊt/", meaning:"đồ ăn mang đi", example:"Let's just get takeout tonight.", icon:"🥡", mnemonic:"Tưởng tượng bạn LẤY (take) hộp cơm nóng hổi mang RA NGOÀI (out) thay vì ngồi ăn tại chỗ" },
        { id:"sd8", word:"split the bill", ipa:"/splɪt ðə bɪl/", meaning:"chia tiền hóa đơn", example:"Should we split the bill?", icon:"💳", mnemonic:"Tưởng tượng tờ hóa đơn (bill) bị XÉ ĐÔI (split) ra làm hai phần bằng nhau" },
        { id:"sd9", word:"craving", ipa:"/ˈkreɪvɪŋ/", meaning:"thèm ăn", example:"I have a craving for something sweet.", icon:"🍫", mnemonic:"Tưởng tượng cái bụng đang gào THÈM (crave) 1 miếng socola tới mức không nhịn nổi" },
        { id:"sd10", word:"leftovers", ipa:"/ˈlɛftoʊvərz/", meaning:"đồ ăn thừa", example:"We have leftovers from last night.", icon:"🍱", mnemonic:"Tưởng tượng phần đồ ăn còn SÓT LẠI (left) DƯ RA (over) sau bữa tối hôm qua" }
      ],
      phrases: [
        { id:"sdp1", phrase:"Could I get the bill, please?", meaning:"Cho tôi xin hóa đơn được không?", context:"", hook:"Tưởng tượng bạn giơ tay ra dấu vẽ 1 tờ hóa đơn trong không khí" },
        { id:"sdp2", phrase:"Do you have this in a different size?", meaning:"Có size khác không?", context:"", hook:"Tưởng tượng cùng 1 chiếc áo nhưng phóng to/thu nhỏ như đang zoom ảnh" },
        { id:"sdp3", phrase:"I'm just browsing, thanks.", meaning:"Tôi chỉ xem thôi, cảm ơn.", context:"", hook:"Tưởng tượng mắt bạn LƯỚT (browsing) qua kệ hàng như lướt newsfeed điện thoại" },
        { id:"sdp4", phrase:"What do you recommend?", meaning:"Bạn gợi ý món gì ngon?", context:"", hook:"Tưởng tượng đầu bếp chỉ tay vào món ngon nhất trong thực đơn" },
        { id:"sdp5", phrase:"Can we get a table for two?", meaning:"Cho bàn 2 người được không?", context:"", hook:"Tưởng tượng 2 cái ghế được kéo ra quanh 1 chiếc bàn trống" },
        { id:"sdp6", phrase:"It's on me today.", meaning:"Hôm nay tôi mời (trả tiền).", context:"", hook:"Tưởng tượng hóa đơn nhẹ nhàng đáp XUỐNG VAI (on me) bạn, không phải người khác" }
      ]
    },
    {
      id: "health_wellness", name: "Sức khỏe & Thể dục", icon: "💪", color: "#2A9D8F", category: "life",
      branches: [
        { label: "Tập luyện", wordIds: ["hw1","hw2","hw3","hw7"] },
        { label: "Ốm & hồi phục", wordIds: ["hw4","hw5","hw10"] },
        { label: "Chăm sóc bản thân", wordIds: ["hw6","hw8","hw9"] }
      ],
      words: [
        { id:"hw1", word:"work out", ipa:"/wɜrk aʊt/", meaning:"tập thể dục", example:"I work out three times a week.", icon:"🏋️", mnemonic:"Tưởng tượng bạn đang LÀM VIỆC (work) cật lực với tạ, mồ hôi vã RA (out) như tắm" },
        { id:"hw2", word:"sore", ipa:"/sɔr/", meaning:"đau nhức (cơ)", example:"My legs are so sore after running.", icon:"🤕", mnemonic:"Tưởng tượng bắp chân bạn đang gào SO ĐAU (sore) sau buổi chạy bộ dài" },
        { id:"hw3", word:"stay fit", ipa:"/steɪ fɪt/", meaning:"giữ dáng/khỏe mạnh", example:"She stays fit by cycling every day.", icon:"🏃", mnemonic:"Tưởng tượng bạn GIỮ (stay) dáng người vừa VẶN (fit) như cái áo may đo" },
        { id:"hw4", word:"come down with", ipa:"/kʌm daʊn wɪð/", meaning:"bắt đầu bị ốm", example:"I think I'm coming down with a cold.", icon:"🤒", mnemonic:"Tưởng tượng cơn bệnh từ trên trời RƠI XUỐNG (come down) đúng đầu bạn không báo trước" },
        { id:"hw5", word:"recover", ipa:"/rɪˈkʌvər/", meaning:"hồi phục", example:"It took a week to recover from the flu.", icon:"🩹", mnemonic:"Tưởng tượng cơ thể bạn được PHỦ (cover) LẠI (re-) 1 lớp áo giáp khỏe mạnh như cũ" },
        { id:"hw6", word:"checkup", ipa:"/ˈtʃɛkʌp/", meaning:"khám sức khỏe định kỳ", example:"I have a checkup at the clinic tomorrow.", icon:"🩺", mnemonic:"Tưởng tượng bác sĩ cầm ống nghe KIỂM TRA (check) TOÀN DIỆN (up) từ đầu tới chân" },
        { id:"hw7", word:"burn calories", ipa:"/bɜrn ˈkæləriz/", meaning:"đốt calo", example:"Running burns a lot of calories.", icon:"🔥", mnemonic:"Tưởng tượng từng viên năng lượng (calories) đang bị ĐỐT CHÁY (burn) thành tro khi bạn tập luyện" },
        { id:"hw8", word:"get some rest", ipa:"/gɛt sʌm rɛst/", meaning:"nghỉ ngơi", example:"You should get some rest.", icon:"😴", mnemonic:"Tưởng tượng cơ thể bạn được PHÉP (get) nằm THẢ LỎNG (rest) hoàn toàn trên giường êm" },
        { id:"hw9", word:"cut back on", ipa:"/kʌt bæk ɑn/", meaning:"giảm bớt (ăn/uống gì)", example:"I'm cutting back on sugar.", icon:"✂️", mnemonic:"Tưởng tượng bạn cầm kéo CẮT (cut) bớt LẠI (back) phần đường trong tách trà mỗi ngày" },
        { id:"hw10", word:"under the weather", ipa:"/ˈʌndər ðə ˈwɛðər/", meaning:"cảm thấy không khỏe", example:"I'm feeling a bit under the weather today.", icon:"🌧️", mnemonic:"Tưởng tượng bạn đứng DƯỚI (under) 1 đám mây xám xịt (weather xấu) - không khỏe trong người" }
      ],
      phrases: [
        { id:"hwp1", phrase:"I'm trying to eat healthier.", meaning:"Tôi đang cố ăn uống lành mạnh hơn.", context:"", hook:"Tưởng tượng đĩa rau xanh đang dần thay thế đĩa đồ chiên trên bàn ăn" },
        { id:"hwp2", phrase:"Take care of yourself.", meaning:"Giữ gìn sức khỏe nhé.", context:"", hook:"Tưởng tượng bạn ôm nhẹ chính mình (yourself) như đang chăm sóc 1 báu vật" },
        { id:"hwp3", phrase:"I haven't been sleeping well.", meaning:"Dạo này tôi ngủ không ngon.", context:"", hook:"Tưởng tượng con cừu đếm mãi không đủ để ru bạn ngủ" },
        { id:"hwp4", phrase:"Get well soon!", meaning:"Mau khỏe nhé!", context:"", hook:"Tưởng tượng 1 tấm thiệp bay nhanh (soon) tới chúc bạn mau khỏe" },
        { id:"hwp5", phrase:"I need to see a doctor.", meaning:"Tôi cần đi khám bác sĩ.", context:"", hook:"Tưởng tượng bạn đặt lịch hẹn gặp (see) người mặc áo blouse trắng" },
        { id:"hwp6", phrase:"Let's go for a walk.", meaning:"Đi dạo chút nhé.", context:"", hook:"Tưởng tượng đôi chân rủ nhau bước ra khỏi cửa hít thở không khí trong lành" }
      ]
    },
    {
      id: "home_daily_life", name: "Nhà cửa & Sinh hoạt hàng ngày", icon: "🏡", color: "#8D6E63", category: "life",
      branches: [
        { label: "Việc nhà", wordIds: ["hd1","hd2","hd3"] },
        { label: "Nhà cửa", wordIds: ["hd4","hd5","hd6","hd7","hd8"] },
        { label: "Nhịp sống", wordIds: ["hd9","hd10"] }
      ],
      words: [
        { id:"hd1", word:"chores", ipa:"/tʃɔrz/", meaning:"việc nhà", example:"I do the chores every weekend.", icon:"🧹", mnemonic:"Tưởng tượng 1 danh sách việc lặt vặt dài dằng dặc dán trên tủ lạnh mỗi cuối tuần" },
        { id:"hd2", word:"run errands", ipa:"/rʌn ˈɛrəndz/", meaning:"đi làm việc vặt", example:"I need to run some errands this afternoon.", icon:"🏃‍♀️", mnemonic:"Tưởng tượng bạn CHẠY (run) như con thoi giữa hiệu thuốc, siêu thị để làm hết việc vặt" },
        { id:"hd3", word:"tidy up", ipa:"/ˈtaɪdi ʌp/", meaning:"dọn dẹp gọn gàng", example:"Let's tidy up before guests arrive.", icon:"🧺", mnemonic:"Tưởng tượng căn phòng bừa bộn được dọn GỌN GÀNG (tidy) LÊN (up) sáng bừng trong 10 phút" },
        { id:"hd4", word:"move in", ipa:"/muv ɪn/", meaning:"dọn vào (nhà mới)", example:"We just moved in last month.", icon:"📦", mnemonic:"Tưởng tượng chiếc xe tải chở đồ đạc DI CHUYỂN (move) VÀO (in) căn nhà mới toanh" },
        { id:"hd5", word:"utility bill", ipa:"/juˈtɪləti bɪl/", meaning:"hóa đơn điện nước", example:"I need to pay the utility bill.", icon:"💡", mnemonic:"Tưởng tượng 1 tờ hóa đơn (bill) ghi rõ TIỀN ĐIỆN NƯỚC (utility) bạn phải trả cuối tháng" },
        { id:"hd6", word:"neighbor", ipa:"/ˈneɪbər/", meaning:"hàng xóm", example:"My neighbor is very friendly.", icon:"🏘️", mnemonic:"Tưởng tượng người sống NGAY GẦN (near) bên kia bức tường - đó là hàng xóm" },
        { id:"hd7", word:"broken", ipa:"/ˈbroʊkən/", meaning:"bị hỏng", example:"The washing machine is broken again.", icon:"🔧", mnemonic:"Tưởng tượng cái máy giặt VỠ (break) tan tành thành từng mảnh" },
        { id:"hd8", word:"fix up", ipa:"/fɪks ʌp/", meaning:"sửa sang lại", example:"We're fixing up the kitchen this month.", icon:"🛠️", mnemonic:"Tưởng tượng bạn cầm búa SỬA (fix) LẠI (up) cho căn bếp cũ trông như mới" },
        { id:"hd9", word:"day-to-day", ipa:"/deɪ tə deɪ/", meaning:"hàng ngày, thường nhật", example:"It's just part of my day-to-day routine.", icon:"📅", mnemonic:"Tưởng tượng từng NGÀY nối tiếp NGÀY giống hệt nhau như 1 vòng lặp quen thuộc" },
        { id:"hd10", word:"get used to", ipa:"/gɛt juzd tə/", meaning:"quen với", example:"I'm getting used to the new schedule.", icon:"🔄", mnemonic:"Tưởng tượng bộ não bạn dần QUEN (used to) với lịch trình mới sau vài tuần lặp lại" }
      ],
      phrases: [
        { id:"hdp1", phrase:"I need to run some errands today.", meaning:"Hôm nay tôi cần đi làm vài việc vặt.", context:"", hook:"Tưởng tượng bạn cầm 1 tờ danh sách việc vặt chạy khắp phố trong hôm nay" },
        { id:"hdp2", phrase:"Make yourself at home.", meaning:"Cứ tự nhiên như ở nhà nhé.", context:"", hook:"Tưởng tượng bạn mở toang cửa mời khách coi nhà mình như nhà của họ" },
        { id:"hdp3", phrase:"It's such a hassle.", meaning:"Thật là phiền phức.", context:"", hook:"Tưởng tượng 1 mớ dây rối beng (hassle) quấn chặt lấy bạn" },
        { id:"hdp4", phrase:"I'm still settling in.", meaning:"Tôi vẫn đang ổn định chỗ ở mới.", context:"", hook:"Tưởng tượng đồ đạc vẫn còn nằm trong thùng carton, chưa ổn định (settle) hẳn" },
        { id:"hdp5", phrase:"Could you keep it down? The neighbors might hear.", meaning:"Nhỏ tiếng chút, hàng xóm nghe đó.", context:"", hook:"Tưởng tượng bạn ấn nhẹ (down) nút âm lượng xuống vì sợ vách tường mỏng" },
        { id:"hdp6", phrase:"Let's split the housework.", meaning:"Cùng chia việc nhà nhé.", context:"", hook:"Tưởng tượng công việc nhà bị CHẺ ĐÔI (split) công bằng cho 2 người" }
      ]
    },
    {
      id: "hobbies_entertainment", name: "Sở thích & Giải trí", icon: "🎬", color: "#9C6ADE", category: "life",
      branches: [
        { label: "Giải trí tại nhà", wordIds: ["he1","he2","he7","he8"] },
        { label: "Sở thích cá nhân", wordIds: ["he3","he9","he10","he6"] },
        { label: "Đi chơi", wordIds: ["he4","he5"] }
      ],
      words: [
        { id:"he1", word:"binge-watch", ipa:"/bɪndʒ wɑtʃ/", meaning:"xem liên tục nhiều tập", example:"I binge-watched the whole series in a weekend.", icon:"📺", mnemonic:"Tưởng tượng bạn ngồi lì trên ghế, XEM (watch) NGẤU NGHIẾN (binge) hết cả mùa phim trong 1 đêm" },
        { id:"he2", word:"spoiler", ipa:"/ˈspɔɪlər/", meaning:"tình tiết bị lộ", example:"Don't give me any spoilers!", icon:"🙊", mnemonic:"Tưởng tượng có đứa bạn chạy tới LÀM HỎNG (spoil) bất ngờ của cả bộ phim bạn chưa xem" },
        { id:"he3", word:"get into", ipa:"/gɛt ˈɪntu/", meaning:"bắt đầu thích/đam mê", example:"I recently got into painting.", icon:"🎸", mnemonic:"Tưởng tượng bạn bước hẳn (get) VÀO TRONG (into) 1 thế giới sở thích mới và mê tít luôn" },
        { id:"he4", word:"hang out", ipa:"/hæŋ aʊt/", meaning:"đi chơi cùng nhau", example:"We hung out at the park all afternoon.", icon:"🎉", mnemonic:"Tưởng tượng bạn TREO MÌNH (hang) lửng lơ chơi bời NGOÀI (out) phố với hội bạn thân" },
        { id:"he5", word:"day trip", ipa:"/deɪ trɪp/", meaning:"chuyến đi trong ngày", example:"We took a day trip to the beach.", icon:"🚗", mnemonic:"Tưởng tượng 1 chuyến đi (trip) chỉ gói gọn trong đúng 1 NGÀY (day) rồi về nhà ngủ" },
        { id:"he6", word:"laid-back", ipa:"/leɪd bæk/", meaning:"thoải mái, không gò bó", example:"It was a laid-back weekend at home.", icon:"😌", mnemonic:"Tưởng tượng bạn NẰM NGẢ (laid) hẳn RA SAU (back) ghế sofa, chẳng lo nghĩ gì cả" },
        { id:"he7", word:"playlist", ipa:"/ˈpleɪlɪst/", meaning:"danh sách nhạc", example:"Can you share your workout playlist?", icon:"🎵", mnemonic:"Tưởng tượng 1 DANH SÁCH (list) dài các bài hát xếp hàng chờ được PHÁT (play)" },
        { id:"he8", word:"board game", ipa:"/bɔrd geɪm/", meaning:"trò chơi cờ bàn", example:"Let's play a board game tonight.", icon:"🎲", mnemonic:"Tưởng tượng quân cờ di chuyển khắp 1 tấm BÀN (board) gỗ trong trò chơi gia đình" },
        { id:"he9", word:"hobby", ipa:"/ˈhɑbi/", meaning:"sở thích", example:"Photography has become my favorite hobby.", icon:"🎨", mnemonic:"Tưởng tượng 1 góc nhỏ trong tim bạn luôn dành riêng cho sở thích này" },
        { id:"he10", word:"unwind", ipa:"/ʌnˈwaɪnd/", meaning:"thư giãn, xả stress", example:"I like to unwind by reading before bed.", icon:"🧘", mnemonic:"Tưởng tượng sợi dây cót đồng hồ bị siết chặt (wind) suốt tuần, giờ được THÁO LỎNG (un-wind) ra hết" }
      ],
      phrases: [
        { id:"hep1", phrase:"What do you do for fun?", meaning:"Bạn thường làm gì để giải trí?", context:"", hook:"Tưởng tượng bạn tò mò hỏi xem người kia giấu niềm vui (fun) ở đâu" },
        { id:"hep2", phrase:"I'm really into it lately.", meaning:"Dạo này tôi mê cái đó lắm.", context:"", hook:"Tưởng tượng bạn bị hút (into) chặt như nam châm vào 1 sở thích gần đây" },
        { id:"hep3", phrase:"Let's binge-watch this show.", meaning:"Cùng cày phim này đi.", context:"", hook:"Tưởng tượng cả 2 người rủ nhau khóa cửa, cày hết 1 mùa phim" },
        { id:"hep4", phrase:"It really helps me unwind.", meaning:"Cái đó giúp tôi thư giãn hẳn.", context:"", hook:"Tưởng tượng sợi dây căng thẳng trong bạn được tháo lỏng (unwind) dần ra" },
        { id:"hep5", phrase:"Count me in!", meaning:"Cho tôi tham gia với!", context:"", hook:"Tưởng tượng bạn nhảy bổ vào danh sách tham gia trước khi hết chỗ" },
        { id:"hep6", phrase:"I could use a break.", meaning:"Tôi cần nghỉ xả hơi chút.", context:"", hook:"Tưởng tượng bạn giơ tay xin 1 khoảng NGẮT QUÃNG (break) ngắn để thở" }
      ]
    }
  ]
};

// Nội dung học: Banking/Fintech + IT + Giao tiếp công sở + Đời sống
// category: "work" (công việc), "life" (đời sống) hoặc "core" (nền tảng - hiện ở cả 2 mode)
// Mỗi topic: words (từ vựng) + phrases (cụm câu giao tiếp)
// Mỗi word: mnemonic (mẹo liên tưởng âm/nghĩa) + visual (hình dung cảnh tượng sống động để nhớ lâu - kỹ thuật keyword/imagery method)
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
        { id:"gw1", word:"actually", ipa:"/ˈæktʃuəli/", meaning:"thật ra thì", example:"Actually, I think we should wait.", icon:"💭", mnemonic:"Actual = thực tế, actually = nói thật ra", visual:"Tưởng tượng bạn giơ tay ngăn lại rồi nói ra sự thật phía sau" },
        { id:"gw2", word:"by the way", ipa:"/baɪ ðə weɪ/", meaning:"à mà, tiện thể", example:"By the way, did you finish the report?", icon:"🚶", mnemonic:"'Trên đường đi' tiện nhắc thêm 1 chuyện", visual:"Hình dung bạn đang đi thì sực nhớ ra, quay đầu nói thêm 1 câu" },
        { id:"gw3", word:"to be honest", ipa:"/tə bi ˈɑnɪst/", meaning:"thành thật mà nói", example:"To be honest, I don't think that will work.", icon:"🫡", mnemonic:"Honest = thật thà, dùng để mở đầu ý kiến thật lòng", visual:"Tưởng tượng bạn đặt tay lên ngực trước khi nói thật lòng" },
        { id:"gw4", word:"the thing is", ipa:"/ðə θɪŋ ɪz/", meaning:"vấn đề là", example:"The thing is, we don't have enough time.", icon:"🧩", mnemonic:"'Cái sự việc là' - dẫn vào lý do/khó khăn thật", visual:"Hình dung bạn gãi đầu rồi mới nói ra vấn đề thật sự" },
        { id:"gw5", word:"on top of that", ipa:"/ɑn tɑp əv ðæt/", meaning:"hơn nữa, thêm vào đó", example:"On top of that, the client changed the requirements.", icon:"📚", mnemonic:"Chồng thêm 1 lớp 'trên đỉnh' những gì đã nói", visual:"Tưởng tượng 1 viên gạch nữa được chồng thêm lên đỉnh tháp đã cao" },
        { id:"gw6", word:"anyway", ipa:"/ˈɛniweɪ/", meaning:"dù sao thì", example:"Anyway, let's move on to the next topic.", icon:"🔄", mnemonic:"Any (bất kỳ) + way (cách) = dù theo cách nào thì...", visual:"Hình dung bạn phẩy tay gạt hết chuyện cũ sang 1 bên" },
        { id:"gw7", word:"I mean", ipa:"/aɪ min/", meaning:"ý tôi là", example:"I mean, it's not a big deal, but still.", icon:"💬", mnemonic:"Dùng khi muốn giải thích rõ hơn ý vừa nói", visual:"Tưởng tượng bạn dừng lại, chỉ tay giải thích rõ hơn ý vừa nói" },
        { id:"gw8", word:"sort of", ipa:"/sɔrt əv/", meaning:"kiểu như, hơi hơi", example:"It's sort of complicated to explain.", icon:"🌀", mnemonic:"'Kiểu/loại' này - dùng khi không chắc chắn 100%", visual:"Hình dung bạn lắc lắc bàn tay ý nói 'nửa nạc nửa mỡ'" },
        { id:"gw9", word:"as far as I know", ipa:"/æz fɑr æz aɪ noʊ/", meaning:"theo tôi biết thì", example:"As far as I know, the meeting is at 3pm.", icon:"🔍", mnemonic:"'Xa nhất mà tôi biết được' - nói khi không chắc 100%", visual:"Tưởng tượng bạn nhìn xa hết tầm mắt rồi nhún vai" },
        { id:"gw10", word:"speaking of which", ipa:"/ˈspikɪŋ əv wɪtʃ/", meaning:"nói đến chuyện đó", example:"Speaking of which, have you talked to him yet?", icon:"🗣️", mnemonic:"Dùng để chuyển sang ý liên quan vừa nhắc tới", visual:"Hình dung 1 bóng đèn bật sáng trên đầu ngay khi nghe từ khóa quen" },
        { id:"gw11", word:"at the end of the day", ipa:"/æt ði ɛnd əv ðə deɪ/", meaning:"suy cho cùng", example:"At the end of the day, it's the client's decision.", icon:"🌇", mnemonic:"'Cuối ngày nhìn lại' - tổng kết điều quan trọng nhất", visual:"Tưởng tượng mặt trời lặn, bạn ngồi tổng kết lại cả ngày dài" },
        { id:"gw12", word:"either way", ipa:"/ˈiðər weɪ/", meaning:"dù thế nào đi nữa", example:"Either way, we need to inform the team.", icon:"⚖️", mnemonic:"Either = 1 trong 2, either way = theo cách nào cũng vậy", visual:"Hình dung 2 con đường dẫn về cùng 1 đích đến" },
        { id:"gw13", word:"no worries", ipa:"/noʊ ˈwɜriz/", meaning:"không sao đâu", example:"No worries, take your time.", icon:"😊", mnemonic:"No (không) + worries (lo lắng) = đừng lo", visual:"Tưởng tượng bạn xua tay, nụ cười nhẹ tênh không chút lo âu" },
        { id:"gw14", word:"that said", ipa:"/ðæt sɛd/", meaning:"dù vậy, tuy nhiên", example:"That said, we should still be careful.", icon:"🔀", mnemonic:"'Đã nói vậy rồi, nhưng mà...' - chuyển ý nhẹ nhàng", visual:"Hình dung bạn giơ 1 ngón tay ra hiệu 'khoan đã, còn 1 ý nữa'" },
        { id:"gw15", word:"more or less", ipa:"/mɔr ɔr lɛs/", meaning:"đại khái, gần như vậy", example:"The project is more or less finished.", icon:"🤏", mnemonic:"More (nhiều hơn) or (hoặc) less (ít hơn) = xấp xỉ vậy", visual:"Tưởng tượng cái cân lắc lư nhẹ quanh mức chính giữa" },
        { id:"gw16", word:"by all means", ipa:"/baɪ ɔl minz/", meaning:"cứ tự nhiên, được thôi", example:"By all means, go ahead and ask.", icon:"👍", mnemonic:"Dùng khi đồng ý thoải mái cho ai làm gì đó", visual:"Hình dung bạn mở rộng cửa, ra hiệu mời vào thoải mái" }
      ],
      phrases: [
        { id:"gwp1", phrase:"Actually, to be honest, I haven't started yet.", meaning:"Thật ra thì, nói thật tôi chưa bắt đầu đâu.", context:"Kết hợp 2 từ nối để nói thật nhẹ nhàng hơn." },
        { id:"gwp2", phrase:"The thing is, we're already over budget.", meaning:"Vấn đề là, chúng ta đã vượt ngân sách rồi.", context:"" },
        { id:"gwp3", phrase:"Anyway, that's a story for another day.", meaning:"Dù sao thì, chuyện đó để hôm khác kể.", context:"" },
        { id:"gwp4", phrase:"Speaking of which, that reminds me of something.", meaning:"Nói đến chuyện đó, làm tôi nhớ ra 1 việc.", context:"" },
        { id:"gwp5", phrase:"At the end of the day, we just want it to work.", meaning:"Suy cho cùng, chúng ta chỉ muốn nó chạy được thôi.", context:"" },
        { id:"gwp6", phrase:"That said, let's give it a try.", meaning:"Dù vậy, cứ thử xem sao.", context:"" }
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
        { id:"pc1", word:"think", ipa:"/θɪŋk/", meaning:"âm TH vô thanh (θ) - cắn nhẹ đầu lưỡi giữa 2 hàm răng, không phải âm T", example:"I think this is right.", icon:"👅", mnemonic:"Đặt lưỡi giữa răng rồi thổi hơi ra, đừng để lưỡi chạm vòm miệng như âm T", visual:"Tưởng tượng đầu lưỡi bạn thè nhẹ ra cắn vào rồi thổi hơi lạnh" },
        { id:"pc2", word:"this", ipa:"/ðɪs/", meaning:"âm TH hữu thanh (ð) - giống âm ở 'think' nhưng có rung dây thanh", example:"This is my book.", icon:"👅", mnemonic:"Đặt tay lên cổ họng - phải cảm nhận được độ rung khi phát âm", visual:"Hình dung y hệt âm think nhưng cổ họng bạn rung lên như còi xe" },
        { id:"pc3", word:"light", ipa:"/laɪt/", meaning:"âm L cuối từ - đầu lưỡi phải chạm vòm miệng trên, không được bỏ qua", example:"Turn on the light.", icon:"💡", mnemonic:"Đầu lưỡi chạm nhẹ vòm miệng trên, giữ đúng 1 nhịp rồi mới buông", visual:"Tưởng tượng đầu lưỡi bạn gõ nhẹ lên trần miệng như gõ cửa" },
        { id:"pc4", word:"right", ipa:"/raɪt/", meaning:"âm R - cong lưỡi ra sau, không chạm vào đâu cả (khác hẳn âm L)", example:"Turn right, not left.", icon:"🔄", mnemonic:"R: lưỡi lơ lửng không chạm đâu; L: lưỡi chạm rõ vòm miệng", visual:"Tưởng tượng lưỡi cong lại như đuôi con tôm, treo lơ lửng giữa miệng không chạm đâu" },
        { id:"pc5", word:"very", ipa:"/ˈvɛri/", meaning:"âm V - cắn nhẹ môi dưới bằng răng trên rồi rung, khác âm W (tròn môi)", example:"It's very good.", icon:"👄", mnemonic:"Cắn răng trên vào môi dưới rồi rung, giống hơi nhai môi nhẹ", visual:"Tưởng tượng răng trên cắn nhẹ môi dưới rồi rung lên như ong bay" },
        { id:"pc6", word:"walked", ipa:"/wɔkt/", meaning:"đuôi -ed đọc là /t/ khi từ kết thúc âm vô thanh (k, p, s, ch, sh)", example:"I walked to work yesterday.", icon:"🚶", mnemonic:"Walk kết thúc âm 'k' (vô thanh) → -ed đọc /t/, không đọc /əd/", visual:"Hình dung bước chân dừng phựt lại đúng 1 nhịp, gọn và dứt khoát" },
        { id:"pc7", word:"played", ipa:"/pleɪd/", meaning:"đuôi -ed đọc là /d/ khi từ kết thúc âm hữu thanh (nguyên âm, l, n, v, r...)", example:"We played football all afternoon.", icon:"⚽", mnemonic:"Play kết thúc nguyên âm (hữu thanh) → -ed đọc /d/", visual:"Tưởng tượng quả bóng lăn êm dài không vấp, âm cuối kéo dài mượt" },
        { id:"pc8", word:"wanted", ipa:"/ˈwɑntɪd/", meaning:"đuôi -ed đọc thành 1 âm tiết riêng /ɪd/ khi từ kết thúc bằng t hoặc d", example:"She wanted to leave early.", icon:"🙋", mnemonic:"Want kết thúc bằng 't' → phải thêm hẳn 1 âm tiết /ɪd/, không được nuốt âm", visual:"Hình dung có thêm 1 nhịp chân bước phụ, rõ ràng chứ không lướt qua" },
        { id:"pc9", word:"cats", ipa:"/kæts/", meaning:"đuôi -s/-es đọc là /s/ khi từ kết thúc âm vô thanh", example:"I have two cats at home.", icon:"🐱", mnemonic:"Cat kết thúc 't' (vô thanh) → -s đọc /s/, không đọc /z/", visual:"Tưởng tượng tiếng rít nhẹ như xì hơi ở cuối từ, không rung" },
        { id:"pc10", word:"dogs", ipa:"/dɔgz/", meaning:"đuôi -s/-es đọc là /z/ khi từ kết thúc âm hữu thanh", example:"They have three dogs.", icon:"🐶", mnemonic:"Dog kết thúc 'g' (hữu thanh) → -s đọc /z/, giống âm 'z' rung", visual:"Hình dung tiếng ong vo ve rung nhẹ ở cuối từ" },
        { id:"pc11", word:"record", ipa:"/ˈrɛkərd/ (n) - /rɪˈkɔrd/ (v)", meaning:"trọng âm rơi vào âm 1 khi là danh từ, âm 2 khi là động từ (áp dụng nhiều từ 2 âm tiết)", example:"I want to record a new record.", icon:"🎵", mnemonic:"Danh từ nhấn đầu (RE-cord), động từ nhấn cuối (re-CORD)", visual:"Tưởng tượng cái cân nghiêng về đầu từ khi là danh từ, nghiêng về cuối khi là động từ" },
        { id:"pc12", word:"an apple", ipa:"/ən ˈæpəl/", meaning:"nối phụ âm cuối với nguyên âm đầu của từ sau, đọc liền không tách rời", example:"I ate an apple an hour ago.", icon:"🔗", mnemonic:"Đọc liền thành 'ə-næpl', đừng dừng lại giữa 2 từ như tiếng Việt", visual:"Hình dung 2 từ dính chặt vào nhau như nam châm, không có khe hở" }
      ],
      phrases: [
        { id:"pcp1", phrase:"Three thin things think alike.", meaning:"Câu luyện âm TH - đọc chậm 3 lần rồi tăng tốc dần.", context:"Tongue twister luyện âm TH (θ)." },
        { id:"pcp2", phrase:"She sells seashells by the seashore.", meaning:"Câu luyện âm S/SH kinh điển.", context:"Tongue twister luyện phân biệt S và SH." },
        { id:"pcp3", phrase:"I really like the red lorry.", meaning:"Câu luyện phân biệt âm R và L.", context:"Chú ý lưỡi cong ra sau (R) và lưỡi chạm vòm miệng (L)." },
        { id:"pcp4", phrase:"We walked, talked, and laughed.", meaning:"Câu luyện 3 cách đọc đuôi -ed khác nhau.", context:"walked=/t/, talked=/t/, laughed=/t/ - thử đổi sang played/needed để so sánh." },
        { id:"pcp5", phrase:"The cats and dogs played outside.", meaning:"Câu luyện đuôi -s và -ed trong cùng 1 câu.", context:"cats=/s/, dogs=/z/, played=/d/." },
        { id:"pcp6", phrase:"Can you record this record for me?", meaning:"Câu luyện trọng âm danh từ/động từ của từ 'record'.", context:"record (v, nhấn âm 2) - record (n, nhấn âm 1)." }
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
        { id:"m1", word:"agenda", ipa:"/əˈdʒendə/", meaning:"chương trình họp", example:"Let's stick to the agenda so we finish on time.", icon:"📋", mnemonic:"A-GEN-đa: tờ giấy ghi các mục cần bàn trong họp", visual:"Tưởng tượng 1 tờ giấy dài với 10 mục việc, sếp gõ bút xuống từng dòng" },
        { id:"m2", word:"minutes", ipa:"/ˈmɪnɪts/", meaning:"biên bản họp", example:"Can you take the minutes for this meeting?", icon:"📝", mnemonic:"Minutes = phút, nghĩa bóng: ghi lại từng phút họp", visual:"Hình dung 1 người ngồi góc phòng họp, tay ghi lia lịa không ngừng nghỉ" },
        { id:"m3", word:"stakeholder", ipa:"/ˈsteɪkhoʊldər/", meaning:"bên liên quan", example:"We need sign-off from all stakeholders.", icon:"🤝", mnemonic:"Stake (cổ phần) + holder (người giữ)", visual:"Tưởng tượng nhiều bàn tay từ khắp nơi cùng chìa ra nắm giữ 1 sợi dây cổ phần" },
        { id:"m4", word:"deadline", ipa:"/ˈdɛdlaɪn/", meaning:"hạn chót", example:"The deadline for this report is Friday.", icon:"⏰", mnemonic:"Dead-line: qua vạch này là 'chết' hạn", visual:"Hình dung 1 vạch đỏ trên sàn, bước qua là chuông báo động hú lên" },
        { id:"m5", word:"follow up", ipa:"/ˈfɑloʊ ʌp/", meaning:"theo dõi/nhắc lại sau", example:"I'll follow up with you by email.", icon:"🔁", mnemonic:"Follow (theo) + up (tiếp) = đi theo tiếp tới cùng, nhắc lại sau", visual:"Tưởng tượng bạn chạy theo sau ai đó, vỗ vai nhắc lại điều vừa nói" },
        { id:"m6", word:"postpone", ipa:"/poʊstˈpoʊn/", meaning:"hoãn lại", example:"We had to postpone the meeting to next week.", icon:"⏸️", mnemonic:"Post (sau) + pone (đặt) = đặt ra sau", visual:"Hình dung cây kim đồng hồ họp bị đẩy lùi lại bằng ngón tay" },
        { id:"m7", word:"brainstorm", ipa:"/ˈbreɪnstɔrm/", meaning:"động não", example:"Let's brainstorm some ideas before deciding.", icon:"🌪️", mnemonic:"Brain (não) + storm (bão) = ý tưởng tuôn ra", visual:"Tưởng tượng 1 cơn bão ý tưởng xoáy tròn trong đầu, giấy note bay tứ tung" },
        { id:"m8", word:"bring up", ipa:"/brɪŋ ʌp/", meaning:"nêu ra (vấn đề)", example:"She brought up a good point about the budget.", icon:"💬", mnemonic:"Bring (mang) + up (lên) = mang 1 ý lên bàn thảo luận", visual:"Hình dung bạn giơ tay nâng 1 chủ đề lên cao giữa bàn họp" },
        { id:"m9", word:"on the same page", ipa:"/ɑn ðə seɪm peɪdʒ/", meaning:"cùng hiểu như nhau", example:"Let's make sure we're all on the same page.", icon:"📖", mnemonic:"Cùng đọc 'chung 1 trang sách' = hiểu giống nhau", visual:"Tưởng tượng cả phòng họp cùng cầm chung 1 cuốn sách, mở đúng 1 trang" },
        { id:"m10", word:"touch base", ipa:"/tʌtʃ beɪs/", meaning:"trao đổi nhanh", example:"Let's touch base tomorrow morning.", icon:"📞", mnemonic:"Touch (chạm) + base (căn cứ) = kiểm tra nhanh", visual:"Hình dung 2 người chạm tay nhẹ vào nhau như chạm base trong bóng chày" },
        { id:"m11", word:"take the floor", ipa:"/teɪk ðə flɔr/", meaning:"phát biểu tiếp", example:"I'd like to take the floor now, if that's okay.", icon:"🎤", mnemonic:"Take the floor = 'giành lấy sàn diễn' để phát biểu", visual:"Tưởng tượng bạn bước hẳn ra giữa sân khấu, ánh đèn chiếu thẳng vào" },
        { id:"m12", word:"wrap up", ipa:"/ræp ʌp/", meaning:"kết thúc/tổng kết", example:"Let's wrap up the meeting with next steps.", icon:"🎁", mnemonic:"Wrap = gói lại, giống gói quà xong = xong việc", visual:"Hình dung cuộc họp được gói lại như 1 món quà, thắt nơ xong xuôi" }
      ],
      phrases: [
        { id:"mp1", phrase:"Let's circle back to this later.", meaning:"Chúng ta quay lại vấn đề này sau nhé.", context:"Dùng khi muốn hoãn 1 điểm để bàn sau." },
        { id:"mp2", phrase:"Can everyone hear me okay?", meaning:"Mọi người nghe rõ tôi không?", context:"Mở đầu họp online." },
        { id:"mp3", phrase:"I think we're getting off track.", meaning:"Tôi nghĩ chúng ta đang lạc đề.", context:"Kéo cuộc họp về đúng hướng." },
        { id:"mp4", phrase:"Let's take this offline.", meaning:"Việc này bàn riêng sau nhé.", context:"Khi chủ đề chỉ liên quan vài người." },
        { id:"mp5", phrase:"To sum up...", meaning:"Tóm lại là...", context:"Mở đầu phần tổng kết." },
        { id:"mp6", phrase:"I'll loop you in.", meaning:"Tôi sẽ thêm bạn vào để cùng theo dõi.", context:"Khi thêm ai đó vào email/nhóm chat." },
        { id:"mp7", phrase:"Sorry to interrupt, but...", meaning:"Xin lỗi ngắt lời, nhưng...", context:"Lịch sự khi cần chen ngang." },
        { id:"mp8", phrase:"Let's park that for now.", meaning:"Tạm gác việc đó lại đã.", context:"Hoãn 1 ý tưởng để bàn sau." }
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
        { id:"e1", word:"attach", ipa:"/əˈtætʃ/", meaning:"đính kèm", example:"I've attached the file to this email.", icon:"📎", mnemonic:"At-tach nghe như 'đính' - đính kèm file vào", visual:"Tưởng tượng 1 cái kẹp giấy ghim chặt file vào email" },
        { id:"e2", word:"cc", ipa:"/siː siː/", meaning:"gửi bản sao cho", example:"Please cc my manager on this email.", icon:"📤", mnemonic:"Carbon Copy = bản sao carbon (thời xưa)", visual:"Hình dung email được photocopy gửi thêm 1 bản cho sếp đứng sau lưng" },
        { id:"e3", word:"reply-all", ipa:"/rɪˈplaɪ ɔl/", meaning:"trả lời tất cả", example:"Please don't reply-all unless it's necessary.", icon:"↩️", mnemonic:"Reply (trả lời) + all (tất cả) = trả lời cho mọi người nhận", visual:"Tưởng tượng bạn hét to giữa văn phòng để cả 50 người cùng nghe" },
        { id:"e4", word:"draft", ipa:"/dræft/", meaning:"bản nháp", example:"This is just a draft, feel free to edit it.", icon:"✏️", mnemonic:"Draft giống 'dự thảo' - bản chưa hoàn chỉnh", visual:"Hình dung tờ giấy nháp nhàu nát, còn dính vết tẩy xóa" },
        { id:"e5", word:"escalate", ipa:"/ˈɛskəleɪt/", meaning:"đẩy lên cấp cao hơn", example:"If there's no response, we'll escalate this issue.", icon:"📈", mnemonic:"Escalate ~ escalator (thang cuốn) = đẩy lên cao", visual:"Tưởng tượng vấn đề nhỏ bước lên thang cuốn, càng lúc càng lên cao tầng" },
        { id:"e6", word:"prompt", ipa:"/prɑmpt/", meaning:"nhanh chóng, kịp thời", example:"Thank you for your prompt reply.", icon:"⚡", mnemonic:"Prompt nghe như 'đúng lúc, mau lẹ'", visual:"Hình dung 1 người bấm chuông cửa và trả lời ngay tức khắc, không chờ" },
        { id:"e7", word:"per my last email", ipa:"/pər maɪ læst ˈiːmeɪl/", meaning:"như tôi đã nói ở email trước", example:"Per my last email, the deadline is Monday.", icon:"🔁", mnemonic:"Câu 'nhắc khéo' kinh điển dân công sở", visual:"Tưởng tượng bạn chỉ tay vào email cũ, gõ gõ ngón tay nhắc khéo" },
        { id:"e8", word:"kindly", ipa:"/ˈkaɪndli/", meaning:"vui lòng", example:"Kindly review the attached document.", icon:"🙏", mnemonic:"Kind (tử tế) + ly = nói một cách nhẹ nhàng, lịch sự", visual:"Hình dung bàn tay nhẹ nhàng đặt lên vai kèm nụ cười khi nhờ vả" },
        { id:"e9", word:"touch point", ipa:"/tʌtʃ pɔɪnt/", meaning:"điểm liên hệ/tương tác", example:"This email is a touch point before our call.", icon:"📍", mnemonic:"Touch (chạm) + point (điểm) = điểm chạm/liên hệ", visual:"Tưởng tượng 1 điểm sáng nhỏ nơi 2 ngón tay vừa chạm vào nhau" },
        { id:"e10", word:"out of office", ipa:"/aʊt əv ˈɔfɪs/", meaning:"vắng mặt tại văn phòng", example:"I'll be out of office next week.", icon:"🌴", mnemonic:"Viết tắt: OOO", visual:"Hình dung cái bàn làm việc trống trơn, đèn tắt, note dán 'đi vắng'" }
      ],
      phrases: [
        { id:"ep1", phrase:"I hope this email finds you well.", meaning:"Hy vọng bạn vẫn ổn.", context:"Câu mở đầu email lịch sự." },
        { id:"ep2", phrase:"Please see attached for more details.", meaning:"Vui lòng xem file đính kèm để biết thêm chi tiết.", context:"" },
        { id:"ep3", phrase:"Let me know if you have any questions.", meaning:"Có thắc mắc gì cứ báo tôi nhé.", context:"" },
        { id:"ep4", phrase:"Just a gentle reminder...", meaning:"Đây là lời nhắc nhẹ nhàng...", context:"Nhắc việc lịch sự." },
        { id:"ep5", phrase:"Thanks in advance.", meaning:"Cảm ơn trước.", context:"Kết thúc email khi nhờ việc gì." },
        { id:"ep6", phrase:"Apologies for the delayed response.", meaning:"Xin lỗi vì phản hồi trễ.", context:"" }
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
        { id:"b1", word:"transaction", ipa:"/trænˈzækʃən/", meaning:"giao dịch", example:"The transaction failed due to insufficient balance.", icon:"💳", mnemonic:"Trans (xuyên qua) + action (hành động) = chuyển tiền qua lại", visual:"Tưởng tượng đồng tiền bay vun vút từ ví này sang ví kia" },
        { id:"b2", word:"authentication", ipa:"/ɔːθɛntɪˈkeɪʃən/", meaning:"xác thực", example:"Two-factor authentication adds an extra layer of security.", icon:"🔐", mnemonic:"Auth(entic) giống 'authentic' = xác thực thật", visual:"Hình dung vân tay bạn phát sáng xanh khi quét qua máy xác thực" },
        { id:"b3", word:"onboarding", ipa:"/ˈɑnbɔrdɪŋ/", meaning:"quy trình mở tài khoản/gia nhập", example:"The onboarding process for new merchants takes 3 days.", icon:"🛬", mnemonic:"On-board = lên tàu/máy bay, ý là 'gia nhập'", visual:"Tưởng tượng bạn bước lên cầu thang máy bay, tiếp viên chào đón vào 'chuyến' ngân hàng số" },
        { id:"b4", word:"merchant", ipa:"/ˈmɜrtʃənt/", meaning:"người bán/đối tác kinh doanh", example:"Merchants can accept payments via QR code.", icon:"🏪", mnemonic:"Merchant gần giống 'merchandise' (hàng hóa)", visual:"Hình dung 1 quầy hàng nhỏ với biển hiệu 'chấp nhận quét mã QR'" },
        { id:"b5", word:"loan disbursement", ipa:"/loʊn dɪsˈbɜrsmənt/", meaning:"giải ngân khoản vay", example:"Loan disbursement happens within 24 hours of approval.", icon:"💰", mnemonic:"Disburse = 'giải' tiền ra, giải ngân", visual:"Tưởng tượng vòi nước tiền được mở van, chảy thẳng vào tài khoản bạn" },
        { id:"b6", word:"credit limit", ipa:"/ˈkrɛdɪt ˈlɪmɪt/", meaning:"hạn mức tín dụng", example:"Your credit limit has been increased.", icon:"📊", mnemonic:"Limit = giới hạn được vay/chi tiêu", visual:"Hình dung 1 cái vạch ngăn trên thẻ, vượt qua là đèn đỏ chớp" },
        { id:"b7", word:"fraud detection", ipa:"/frɔd dɪˈtɛkʃən/", meaning:"phát hiện gian lận", example:"Our system uses AI for fraud detection.", icon:"🕵️", mnemonic:"Fraud = trò lừa gạt; detect = phát hiện", visual:"Tưởng tượng 1 camera an ninh AI chớp mắt phát hiện tên trộm giả dạng" },
        { id:"b8", word:"compliance", ipa:"/kəmˈplaɪəns/", meaning:"tuân thủ (quy định)", example:"All transactions must meet compliance requirements.", icon:"✅", mnemonic:"Comply = tuân theo → compliance = sự tuân thủ", visual:"Hình dung 1 danh sách quy định dài, mỗi ô đều được tick xanh" },
        { id:"b9", word:"e-KYC", ipa:"/iː keɪ waɪ siː/", meaning:"định danh khách hàng điện tử", example:"e-KYC lets customers verify identity remotely.", icon:"🪪", mnemonic:"Know Your Customer", visual:"Tưởng tượng khuôn mặt bạn được quét 3D ngay trên màn hình điện thoại" },
        { id:"b10", word:"downtime", ipa:"/ˈdaʊntaɪm/", meaning:"thời gian hệ thống ngừng hoạt động", example:"We scheduled maintenance during low-traffic downtime.", icon:"🔻", mnemonic:"Down (xuống) + time = thời gian hệ thống 'nằm xuống'", visual:"Hình dung cả hệ thống ngân hàng nằm ngủ, màn hình hiện chữ 'đang bảo trì'" }
      ],
      phrases: [
        { id:"bp1", phrase:"The system is currently experiencing an outage.", meaning:"Hệ thống đang gặp sự cố.", context:"" },
        { id:"bp2", phrase:"Your application is under review.", meaning:"Hồ sơ của bạn đang được xem xét.", context:"" },
        { id:"bp3", phrase:"Please verify your identity to proceed.", meaning:"Vui lòng xác thực danh tính để tiếp tục.", context:"" },
        { id:"bp4", phrase:"This feature is currently in beta.", meaning:"Tính năng này đang thử nghiệm.", context:"" },
        { id:"bp5", phrase:"We appreciate your patience during this process.", meaning:"Cảm ơn sự kiên nhẫn của bạn.", context:"" },
        { id:"bp6", phrase:"The transaction was declined.", meaning:"Giao dịch bị từ chối.", context:"" }
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
        { id:"a1", word:"sprint", ipa:"/sprɪnt/", meaning:"chu kỳ làm việc ngắn", example:"We're in the middle of a two-week sprint.", icon:"🏃", mnemonic:"Sprint = chạy nước rút - đợt làm việc dồn dập ngắn hạn", visual:"Tưởng tượng cả team chạy nước rút 2 tuần, mồ hôi nhễ nhại về đích" },
        { id:"a2", word:"backlog", ipa:"/ˈbæklɔg/", meaning:"danh sách việc tồn đọng", example:"Add this task to the backlog.", icon:"📚", mnemonic:"Back (sau) + log (nhật ký) = việc còn tồn lại phía sau", visual:"Hình dung 1 chồng giấy việc chưa làm cao ngất, xếp hàng dài phía sau" },
        { id:"a3", word:"bug", ipa:"/bʌg/", meaning:"lỗi phần mềm", example:"There's a bug in the login screen.", icon:"🐛", mnemonic:"Bug = con bọ - lỗi chui vào phần mềm như con bọ", visual:"Tưởng tượng 1 con bọ nhỏ bò vào giữa dòng code, cắn 1 phát là sập" },
        { id:"a4", word:"deploy", ipa:"/dɪˈplɔɪ/", meaning:"triển khai", example:"We'll deploy the update tonight.", icon:"🚀", mnemonic:"Deploy giống 'triển khai đội hình' trong quân sự", visual:"Hình dung nút 'phóng tên lửa' được bấm, sản phẩm bay thẳng lên production" },
        { id:"a5", word:"rollback", ipa:"/ˈroʊlbæk/", meaning:"hoàn tác về bản trước", example:"We had to rollback the release due to crashes.", icon:"⏪", mnemonic:"Roll back = lăn ngược lại", visual:"Tưởng tượng cuốn phim tua ngược lại, mọi thứ trở về như cũ" },
        { id:"a6", word:"code review", ipa:"/koʊd rɪˈvjuː/", meaning:"kiểm tra mã nguồn", example:"Please request a code review before merging.", icon:"🔍", mnemonic:"Review = xem xét lại code trước khi dùng", visual:"Hình dung 1 cặp kính lúp soi từng dòng code trước khi cho qua" },
        { id:"a7", word:"merge conflict", ipa:"/mɜrdʒ ˈkɑnflɪkt/", meaning:"xung đột khi gộp code", example:"I'm resolving a merge conflict right now.", icon:"⚔️", mnemonic:"Merge (gộp) + conflict (xung đột)", visual:"Tưởng tượng 2 phiên bản code đánh nhau giành chỗ trên cùng 1 dòng" },
        { id:"a8", word:"QA", ipa:"/kjuː eɪ/", meaning:"kiểm thử chất lượng", example:"QA found a critical issue before release.", icon:"🧪", mnemonic:"Quality Assurance - đảm bảo chất lượng", visual:"Hình dung 1 người đeo găng tay trắng kiểm tra từng ngóc ngách sản phẩm" },
        { id:"a9", word:"tech debt", ipa:"/tɛk dɛt/", meaning:"nợ kỹ thuật", example:"We need to pay down some tech debt this quarter.", icon:"💳", mnemonic:"Giống nợ tiền (debt) nhưng là nợ code xấu", visual:"Tưởng tượng 1 hóa đơn nợ dán trên code cũ, lãi mẹ đẻ lãi con" },
        { id:"a10", word:"root cause", ipa:"/rut kɔz/", meaning:"nguyên nhân gốc rễ", example:"Let's find the root cause before fixing it.", icon:"🌳", mnemonic:"Root = rễ cây, nguyên nhân từ gốc rễ", visual:"Hình dung bạn đào xuống tận rễ cây để tìm ra vì sao lá héo" }
      ],
      phrases: [
        { id:"ap1", phrase:"It's working on my machine.", meaning:"Trên máy tôi vẫn chạy được.", context:"Câu đùa kinh điển của dev." },
        { id:"ap2", phrase:"Can you push your changes?", meaning:"Bạn đẩy code lên được không?", context:"" },
        { id:"ap3", phrase:"This is blocked by another task.", meaning:"Việc này đang bị chặn bởi task khác.", context:"" },
        { id:"ap4", phrase:"Let's spin up a quick call.", meaning:"Mở nhanh 1 cuộc gọi nhé.", context:"" },
        { id:"ap5", phrase:"I'll take a look and get back to you.", meaning:"Tôi sẽ xem qua rồi phản hồi lại.", context:"" },
        { id:"ap6", phrase:"This is a quick fix, not a permanent solution.", meaning:"Đây là bản vá tạm, chưa phải giải pháp lâu dài.", context:"" }
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
        { id:"pr1", word:"overview", ipa:"/ˈoʊvərvjuː/", meaning:"tổng quan", example:"Let me start with a brief overview.", icon:"🔭", mnemonic:"Over (bao quát) + view (nhìn) = nhìn bao quát toàn cảnh", visual:"Tưởng tượng bạn đứng trên máy bay nhìn xuống toàn cảnh thành phố" },
        { id:"pr2", word:"highlight", ipa:"/ˈhaɪlaɪt/", meaning:"điểm nổi bật", example:"The key highlight this quarter is revenue growth.", icon:"✨", mnemonic:"High (cao) + light (sáng) = phần được nổi bật lên", visual:"Hình dung 1 cây bút dạ quang tô sáng rực dòng quan trọng nhất" },
        { id:"pr3", word:"milestone", ipa:"/ˈmaɪlstoʊn/", meaning:"cột mốc quan trọng", example:"We hit an important milestone last month.", icon:"🚩", mnemonic:"Mile (dặm) + stone (đá) = cột mốc đánh dấu mỗi dặm đường", visual:"Tưởng tượng 1 cột mốc đá bên đường đánh dấu bạn đã đi được bao xa" },
        { id:"pr4", word:"takeaway", ipa:"/ˈteɪkəweɪ/", meaning:"điều rút ra được", example:"The main takeaway is that we need more testing.", icon:"🎯", mnemonic:"Take away = mang đi, ý là 'mang về bài học'", visual:"Hình dung bạn xách 1 túi mang về sau buổi họp, trong đó là bài học" },
        { id:"pr5", word:"trend", ipa:"/trɛnd/", meaning:"xu hướng", example:"There's an upward trend in mobile users.", icon:"📈", mnemonic:"Trend - từ hay dùng cả trong tiếng Việt, nghĩa là xu hướng", visual:"Tưởng tượng 1 mũi tên đang bay vút lên trên biểu đồ" },
        { id:"pr6", word:"audience", ipa:"/ˈɔdiəns/", meaning:"khán giả/người nghe", example:"Know your audience before preparing slides.", icon:"👥", mnemonic:"Audience gần giống 'audio' (nghe) - người nghe", visual:"Hình dung hàng trăm đôi tai đang dỏng lên nghe bạn nói" },
        { id:"pr7", word:"visual aid", ipa:"/ˈvɪʒuəl eɪd/", meaning:"công cụ trực quan", example:"Use visual aids to explain complex data.", icon:"🖼️", mnemonic:"Visual (hình ảnh) + aid (hỗ trợ)", visual:"Tưởng tượng 1 bức tranh lớn thay cho ngàn lời giải thích dài dòng" },
        { id:"pr8", word:"Q&A", ipa:"/kjuː ænd eɪ/", meaning:"hỏi đáp", example:"We'll open the floor for Q&A at the end.", icon:"❓", mnemonic:"Question and Answer - hỏi và đáp", visual:"Hình dung rừng cánh tay giơ lên sau khi bạn nói xong" },
        { id:"pr9", word:"bottom line", ipa:"/ˈbɑtəm laɪn/", meaning:"kết luận/điểm mấu chốt", example:"The bottom line is we need more budget.", icon:"📉", mnemonic:"Bottom (đáy) + line (dòng) = dòng cuối cùng, kết luận chốt", visual:"Tưởng tượng bạn gạch chân đậm dòng cuối cùng của cả bài toán" },
        { id:"pr10", word:"rundown", ipa:"/ˈrʌndaʊn/", meaning:"tóm tắt nhanh", example:"Here's a quick rundown of today's topics.", icon:"📃", mnemonic:"Run down = 'chạy xuống' nhanh qua từng ý", visual:"Hình dung bạn chạy nhanh xuống 1 danh sách, điểm qua từng ý trong vài giây" }
      ],
      phrases: [
        { id:"prp1", phrase:"As you can see on this slide...", meaning:"Như các bạn thấy trên slide này...", context:"" },
        { id:"prp2", phrase:"I'll keep this brief.", meaning:"Tôi sẽ trình bày ngắn gọn thôi.", context:"" },
        { id:"prp3", phrase:"Let's dive into the details.", meaning:"Cùng đi sâu vào chi tiết nhé.", context:"" },
        { id:"prp4", phrase:"That's a great question.", meaning:"Đó là 1 câu hỏi hay.", context:"" },
        { id:"prp5", phrase:"To put it simply...", meaning:"Nói đơn giản thì...", context:"" },
        { id:"prp6", phrase:"I'll hand it over to [name].", meaning:"Tôi xin nhường lời cho [tên].", context:"" }
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
        { id:"n1", word:"compromise", ipa:"/ˈkɑmprəmaɪz/", meaning:"thỏa hiệp", example:"We need to find a compromise both sides accept.", icon:"⚖️", mnemonic:"Com- (cùng) + promise (hứa) = cùng hứa nhượng bộ nhau", visual:"Tưởng tượng 2 người kéo co nhưng cùng dừng lại ở giữa vạch" },
        { id:"n2", word:"leverage", ipa:"/ˈlɛvərɪdʒ/", meaning:"đòn bẩy/tận dụng", example:"We can leverage our existing user base.", icon:"🏋️", mnemonic:"Leverage giống 'lever' (đòn bẩy)", visual:"Hình dung 1 cây đòn bẩy nhỏ nâng cả tảng đá to lên" },
        { id:"n3", word:"trade-off", ipa:"/treɪd ɔf/", meaning:"đánh đổi", example:"There's a trade-off between speed and quality.", icon:"↔️", mnemonic:"Trade (đổi) + off = đánh đổi cái này lấy cái khác", visual:"Tưởng tượng 1 cái cân, bên này nặng lên thì bên kia nhẹ đi" },
        { id:"n4", word:"concession", ipa:"/kənˈsɛʃən/", meaning:"sự nhượng bộ", example:"We made a small concession on the price.", icon:"🤲", mnemonic:"Concession = nhượng bộ, nhường lại 1 phần", visual:"Hình dung bạn buông nhẹ 1 phần nắm tay đang giữ chặt" },
        { id:"n5", word:"counteroffer", ipa:"/ˈkaʊntərɔfər/", meaning:"đề nghị phản hồi lại", example:"They sent a counteroffer with a longer timeline.", icon:"🔄", mnemonic:"Counter (đối lại) + offer (đề nghị)", visual:"Tưởng tượng quả bóng được đá ngược trở lại với tốc độ khác" },
        { id:"n6", word:"win-win", ipa:"/wɪn wɪn/", meaning:"hai bên cùng có lợi", example:"Let's aim for a win-win solution.", icon:"🏆", mnemonic:"Win-win = thắng-thắng, cả 2 bên cùng thắng", visual:"Hình dung 2 người cùng giơ cúp vô địch lên 1 lúc" },
        { id:"n7", word:"non-negotiable", ipa:"/nɑn nɪˈgoʊʃiəbəl/", meaning:"không thể thương lượng", example:"The security requirement is non-negotiable.", icon:"🚫", mnemonic:"Non (không) + negotiable (đàm phán được)", visual:"Tưởng tượng 1 cánh cửa sắt khóa chặt, không có chìa nào mở được" },
        { id:"n8", word:"flexible", ipa:"/ˈflɛksəbəl/", meaning:"linh hoạt", example:"We're flexible on the delivery date.", icon:"🤸", mnemonic:"Flex (uốn cong) = linh hoạt, dẻo dai", visual:"Hình dung 1 nhánh cây dẻo dai uốn cong theo gió mà không gãy" },
        { id:"n9", word:"deal-breaker", ipa:"/diːl breɪkər/", meaning:"yếu tố khiến thỏa thuận đổ vỡ", example:"Price is not a deal-breaker for us.", icon:"💥", mnemonic:"Deal (thỏa thuận) + breaker (kẻ phá vỡ)", visual:"Tưởng tượng 1 vết nứt nhỏ làm vỡ tan cả tấm kính thỏa thuận" },
        { id:"n10", word:"stall", ipa:"/stɔl/", meaning:"trì hoãn/câu giờ", example:"They're stalling to get a better deal.", icon:"⏳", mnemonic:"Stall = 'phanh nhỏ giọt' để câu giờ", visual:"Hình dung cỗ xe ngựa cố tình đi thật chậm để câu giờ" }
      ],
      phrases: [
        { id:"np1", phrase:"Let's find a middle ground.", meaning:"Hãy tìm điểm chung nhé.", context:"" },
        { id:"np2", phrase:"What if we met halfway?", meaning:"Nếu chúng ta gặp nhau ở giữa thì sao?", context:"" },
        { id:"np3", phrase:"I'm afraid that doesn't work for us.", meaning:"E là điều đó không phù hợp với chúng tôi.", context:"" },
        { id:"np4", phrase:"Can we revisit the terms?", meaning:"Chúng ta có thể xem lại điều khoản không?", context:"" },
        { id:"np5", phrase:"That's a fair point.", meaning:"Đó là 1 ý hợp lý.", context:"" },
        { id:"np6", phrase:"Let's put this in writing.", meaning:"Hãy ghi lại bằng văn bản nhé.", context:"" }
      ]
    },
    {
      id: "calls_meetings", name: "Gọi điện & Họp online", icon: "📞", color: "#0891B2", category: "work",
      branches: [
        { label: "Sự cố kỹ thuật", wordIds: ["c1","c2","c7","c8","c10"] },
        { label: "Tổ chức cuộc gọi", wordIds: ["c3","c4","c5","c6","c9"] }
      ],
      words: [
        { id:"c1", word:"mute", ipa:"/mjut/", meaning:"tắt tiếng", example:"You're on mute, can you unmute?", icon:"🔇", mnemonic:"Mute - nút tắt tiếng hay thấy trên remote", visual:"Tưởng tượng bạn bấm nút loa, tiếng biến mất ngay lập tức" },
        { id:"c2", word:"lag", ipa:"/læg/", meaning:"độ trễ", example:"There's some lag in the connection.", icon:"🐌", mnemonic:"Lag = trễ, tụt lại phía sau tín hiệu", visual:"Hình dung hình ảnh và tiếng nói bị tách rời, đuổi theo nhau không kịp" },
        { id:"c3", word:"dial in", ipa:"/ˈdaɪəl ɪn/", meaning:"gọi vào (cuộc họp)", example:"Please dial in five minutes early.", icon:"☎️", mnemonic:"Dial (quay số) + in = quay số vào cuộc gọi", visual:"Tưởng tượng ngón tay quay từng số điện thoại cũ để nối vào cuộc gọi" },
        { id:"c4", word:"reschedule", ipa:"/riˈskɛdʒuːl/", meaning:"dời lịch", example:"Can we reschedule to tomorrow afternoon?", icon:"📅", mnemonic:"Re (lại) + schedule (lịch) = lên lịch lại", visual:"Hình dung cuốn lịch được xé trang cũ, viết đè ngày mới lên" },
        { id:"c5", word:"breakout room", ipa:"/ˈbreɪkaʊt rum/", meaning:"phòng họp nhóm nhỏ", example:"We'll split into breakout rooms for discussion.", icon:"🚪", mnemonic:"Break out = tách ra thành phòng nhỏ riêng", visual:"Tưởng tượng cả lớp lớn tách ra thành từng nhóm nhỏ trong phòng riêng" },
        { id:"c6", word:"screen share", ipa:"/skrin ʃɛr/", meaning:"chia sẻ màn hình", example:"Can you share your screen?", icon:"🖥️", mnemonic:"Screen (màn hình) + share (chia sẻ)", visual:"Hình dung màn hình máy tính bạn được chiếu thẳng lên khắp phòng họp" },
        { id:"c7", word:"freeze", ipa:"/friz/", meaning:"đơ/đứng hình", example:"Your video just froze for a second.", icon:"🥶", mnemonic:"Freeze = đóng băng, hình đứng như đông đá", visual:"Tưởng tượng khung hình bị đóng băng cứng đơ như tượng" },
        { id:"c8", word:"connection drop", ipa:"/kəˈnɛkʃən drɑp/", meaning:"rớt kết nối", example:"I got disconnected, sorry for the connection drop.", icon:"📉", mnemonic:"Drop = rớt xuống, kết nối bị rớt", visual:"Hình dung sợi dây kết nối bị đứt phựt, rơi tự do" },
        { id:"c9", word:"agenda item", ipa:"/əˈdʒɛndə ˈaɪtəm/", meaning:"mục trong chương trình họp", example:"Let's move to the next agenda item.", icon:"📌", mnemonic:"Agenda (chương trình) + item (mục)", visual:"Tưởng tượng 1 ô vuông nhỏ được tick xong trong danh sách chương trình họp" },
        { id:"c10", word:"background noise", ipa:"/ˈbækgraʊnd nɔɪz/", meaning:"tiếng ồn xung quanh", example:"Sorry about the background noise.", icon:"🔊", mnemonic:"Background (nền) + noise (tiếng ồn)", visual:"Hình dung tiếng chó sủa, tiếng xe cộ lẫn vào cuộc gọi của bạn" }
      ],
      phrases: [
        { id:"cp1", phrase:"Can you hear me now?", meaning:"Bây giờ bạn nghe tôi không?", context:"" },
        { id:"cp2", phrase:"You're breaking up a little.", meaning:"Giọng bạn bị đứt quãng chút.", context:"" },
        { id:"cp3", phrase:"Let me share my screen.", meaning:"Để tôi chia sẻ màn hình.", context:"" },
        { id:"cp4", phrase:"Sorry, I was on mute.", meaning:"Xin lỗi, tôi vừa để tắt tiếng.", context:"" },
        { id:"cp5", phrase:"I'll send the recording afterward.", meaning:"Tôi sẽ gửi bản ghi hình sau.", context:"" },
        { id:"cp6", phrase:"Can everyone see my screen okay?", meaning:"Mọi người thấy màn hình tôi rõ không?", context:"" }
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
        { id:"t1", word:"issue", ipa:"/ˈɪʃuː/", meaning:"vấn đề/sự cố", example:"We're looking into the issue now.", icon:"⚠️", mnemonic:"Issue - 1 vấn đề nhỏ phát sinh", visual:"Tưởng tượng 1 đèn cảnh báo nhỏ bật sáng trên bảng điều khiển" },
        { id:"t2", word:"glitch", ipa:"/glɪtʃ/", meaning:"trục trặc nhỏ", example:"There was a minor glitch in the app.", icon:"⚡", mnemonic:"Glitch = trục trặc nhỏ, bất chợt", visual:"Hình dung màn hình giật giật 1 giây rồi lại bình thường ngay" },
        { id:"t3", word:"workaround", ipa:"/ˈwɜrkəraʊnd/", meaning:"giải pháp tạm thời", example:"Here's a workaround until the fix is deployed.", icon:"🔀", mnemonic:"Work (làm) + around (vòng qua) = né lỗi tạm", visual:"Tưởng tượng bạn đi vòng qua ổ gà trên đường thay vì dừng lại sửa đường" },
        { id:"t4", word:"reproduce", ipa:"/riprəˈdus/", meaning:"tái tạo lại (lỗi)", example:"I can't reproduce the bug on my end.", icon:"🔁", mnemonic:"Re (lại) + produce (tạo ra) = tạo lại lỗi giống lần trước", visual:"Hình dung bạn bấm lại y hệt các bước để con bọ xuất hiện lần nữa" },
        { id:"t5", word:"incident", ipa:"/ˈɪnsɪdənt/", meaning:"sự cố nghiêm trọng", example:"This is a P1 incident, all hands on deck.", icon:"🚨", mnemonic:"Incident gần giống 'sự cố' xảy ra bất ngờ", visual:"Tưởng tượng còi báo động đỏ vang lên khắp văn phòng" },
        { id:"t6", word:"root cause analysis", ipa:"/rut kɔz əˈnæləsɪs/", meaning:"phân tích nguyên nhân gốc", example:"We'll do a root cause analysis after this is resolved.", icon:"🔬", mnemonic:"Phân tích tận gốc rễ (root) của vấn đề", visual:"Hình dung bạn đào từng lớp đất để tìm đúng cái rễ gây bệnh" },
        { id:"t7", word:"escalation", ipa:"/ɛskəˈleɪʃən/", meaning:"việc đẩy vấn đề lên cấp cao hơn", example:"This requires escalation to the infra team.", icon:"📶", mnemonic:"Escalate = leo thang, đẩy lên cấp cao hơn", visual:"Tưởng tượng lá thư cầu cứu được chuyền tay lên tận CEO" },
        { id:"t8", word:"patch", ipa:"/pætʃ/", meaning:"bản vá", example:"We released a patch to fix the crash.", icon:"🩹", mnemonic:"Patch = miếng vá, vá tạm chỗ lỗi", visual:"Hình dung 1 miếng dán nhỏ vá tạm vết rách trên chiếc áo code" },
        { id:"t9", word:"all hands on deck", ipa:"/ɔl hændz ɑn dɛk/", meaning:"huy động toàn lực", example:"It's all hands on deck until this is fixed.", icon:"🚢", mnemonic:"'Mọi bàn tay lên boong tàu' - huy động hết người", visual:"Tưởng tượng cả thủy thủ đoàn cùng ùa lên boong tàu giữa cơn bão" },
        { id:"t10", word:"troubleshoot", ipa:"/ˈtrʌbəlʃut/", meaning:"khắc phục sự cố", example:"Let's troubleshoot this step by step.", icon:"🔧", mnemonic:"Trouble (rắc rối) + shoot (bắn hạ)", visual:"Hình dung bạn cầm súng bắn hạ từng rắc rối một cách bình tĩnh" }
      ],
      phrases: [
        { id:"tp1", phrase:"We're currently investigating the issue.", meaning:"Chúng tôi đang điều tra sự cố.", context:"" },
        { id:"tp2", phrase:"It should be resolved shortly.", meaning:"Sẽ được khắc phục sớm thôi.", context:"" },
        { id:"tp3", phrase:"Can you walk me through the steps?", meaning:"Bạn hướng dẫn tôi từng bước được không?", context:"" },
        { id:"tp4", phrase:"This has been fixed and deployed.", meaning:"Cái này đã được sửa và triển khai.", context:"" },
        { id:"tp5", phrase:"Let's keep an eye on it.", meaning:"Hãy theo dõi sát vấn đề này.", context:"" },
        { id:"tp6", phrase:"Thanks for flagging this.", meaning:"Cảm ơn bạn đã báo vấn đề này.", context:"" }
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
        { id:"f1", word:"constructive", ipa:"/kənˈstrʌktɪv/", meaning:"mang tính xây dựng", example:"Please give me constructive feedback.", icon:"🏗️", mnemonic:"Construct (xây dựng) + ive = mang tính xây dựng", visual:"Tưởng tượng viên gạch được đặt thêm để xây cao ngôi nhà, không phải đập phá" },
        { id:"f2", word:"strength", ipa:"/strɛŋθ/", meaning:"điểm mạnh", example:"Communication is one of your strengths.", icon:"💪", mnemonic:"Strength = sức mạnh, điểm mạnh", visual:"Hình dung 1 bắp tay cuộn cơ chắc nịch" },
        { id:"f3", word:"area for improvement", ipa:"/ˈɛriə fɔr ɪmˈpruvmənt/", meaning:"điểm cần cải thiện", example:"Time management is an area for improvement.", icon:"📈", mnemonic:"Improve = cải thiện; khu vực cần cải thiện", visual:"Tưởng tượng 1 vùng đất còn trống trên bản đồ, chờ được tô màu thêm" },
        { id:"f4", word:"accomplishment", ipa:"/əˈkɑmplɪʃmənt/", meaning:"thành tựu", example:"List your key accomplishments this year.", icon:"🏅", mnemonic:"Accomplish = hoàn thành → thành tựu đạt được", visual:"Hình dung 1 huy chương vàng đeo lên cổ sau cuộc đua dài" },
        { id:"f5", word:"underperform", ipa:"/ʌndərpərˈfɔrm/", meaning:"làm việc dưới kỳ vọng", example:"The team underperformed this quarter.", icon:"📉", mnemonic:"Under (dưới) + perform (thể hiện)", visual:"Tưởng tượng chiếc xe chạy dưới tốc độ giới hạn cho phép" },
        { id:"f6", word:"recognition", ipa:"/rɛkəgˈnɪʃən/", meaning:"sự công nhận", example:"She received recognition for her hard work.", icon:"🏆", mnemonic:"Recognize = nhận ra/công nhận", visual:"Hình dung cái vỗ tay vang dội cả khán phòng dành riêng cho bạn" },
        { id:"f7", word:"self-assessment", ipa:"/sɛlf əˈsɛsmənt/", meaning:"tự đánh giá", example:"Please complete your self-assessment by Friday.", icon:"🪞", mnemonic:"Self (tự) + assessment (đánh giá)", visual:"Tưởng tượng bạn đứng trước gương tự chấm điểm cho chính mình" },
        { id:"f8", word:"objective", ipa:"/əbˈdʒɛktɪv/", meaning:"mục tiêu", example:"Let's set clear objectives for next quarter.", icon:"🎯", mnemonic:"Object (mục tiêu) + ive = mang tính mục tiêu", visual:"Hình dung 1 mũi tên cắm thẳng vào tâm bia đã ngắm sẵn" },
        { id:"f9", word:"candid", ipa:"/ˈkændɪd/", meaning:"thẳng thắn", example:"I'd like to be candid with you about this.", icon:"🗣️", mnemonic:"Candid nghe như 'can đảm nói thẳng'", visual:"Tưởng tượng bạn nói thẳng không vòng vo, nhìn thẳng vào mắt đối phương" },
        { id:"f10", word:"growth mindset", ipa:"/groʊθ ˈmaɪndsɛt/", meaning:"tư duy cầu tiến", example:"She approaches challenges with a growth mindset.", icon:"🌱", mnemonic:"Growth (tăng trưởng) + mindset (tư duy)", visual:"Hình dung 1 hạt mầm nhỏ tin rằng mình sẽ thành cây to" }
      ],
      phrases: [
        { id:"fp1", phrase:"Can I give you some feedback?", meaning:"Tôi góp ý cho bạn được không?", context:"" },
        { id:"fp2", phrase:"You did a great job on this.", meaning:"Bạn đã làm rất tốt việc này.", context:"" },
        { id:"fp3", phrase:"I'd like to see more of that.", meaning:"Tôi muốn thấy nhiều hơn như vậy.", context:"" },
        { id:"fp4", phrase:"Let's set some clear expectations.", meaning:"Hãy đặt ra kỳ vọng rõ ràng.", context:"" },
        { id:"fp5", phrase:"I appreciate your hard work.", meaning:"Tôi trân trọng sự nỗ lực của bạn.", context:"" },
        { id:"fp6", phrase:"What would you do differently next time?", meaning:"Lần sau bạn sẽ làm khác đi thế nào?", context:"" }
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
        { id:"s1", word:"catch up", ipa:"/kætʃ ʌp/", meaning:"trò chuyện cập nhật", example:"We should catch up over coffee sometime.", icon:"☕", mnemonic:"Catch (bắt kịp) + up = bắt kịp chuyện đã bỏ lỡ", visual:"Tưởng tượng bạn chạy thục mạng để bắt kịp người bạn cũ phía trước" },
        { id:"s2", word:"weekend", ipa:"/ˈwikɛnd/", meaning:"cuối tuần", example:"How was your weekend?", icon:"🌞", mnemonic:"Week (tuần) + end (cuối)", visual:"Hình dung 2 ngày nghỉ được khoanh tròn đỏ trên lịch" },
        { id:"s3", word:"commute", ipa:"/kəˈmjut/", meaning:"di chuyển đi làm", example:"My commute takes about 30 minutes.", icon:"🚗", mnemonic:"Commute - đi đi về về mỗi ngày", visual:"Tưởng tượng dòng người chen chúc trên xe buýt mỗi sáng" },
        { id:"s4", word:"burnout", ipa:"/ˈbɜrnaʊt/", meaning:"kiệt sức vì công việc", example:"He's feeling a bit of burnout lately.", icon:"🔥", mnemonic:"Burn (cháy) + out (hết) = cháy hết năng lượng", visual:"Hình dung cục pin điện thoại tụt xuống 0% giữa ngày" },
        { id:"s5", word:"work-life balance", ipa:"/wɜrk laɪf ˈbæləns/", meaning:"cân bằng công việc-cuộc sống", example:"It's important to maintain work-life balance.", icon:"⚖️", mnemonic:"Balance = cân bằng giữa việc và sống", visual:"Tưởng tượng bạn đi thăng bằng trên dây, 1 tay giữ vali công việc, 1 tay giữ quả bóng cuộc sống" },
        { id:"s6", word:"get along", ipa:"/gɛt əˈlɔŋ/", meaning:"hòa hợp với nhau", example:"I get along well with my teammates.", icon:"🤗", mnemonic:"Get along = 'đi cùng nhịp' - hòa hợp nhau", visual:"Hình dung 2 bánh răng ăn khớp nhau quay đều êm ru" },
        { id:"s7", word:"small talk", ipa:"/smɔl tɔk/", meaning:"chuyện phiếm", example:"He's good at small talk with clients.", icon:"💬", mnemonic:"Small (nhỏ) + talk (nói chuyện)", visual:"Tưởng tượng những câu chuyện nhẹ như bong bóng xà phòng bay qua bay lại" },
        { id:"s8", word:"hang out", ipa:"/hæŋ aʊt/", meaning:"đi chơi/tụ tập", example:"Let's hang out after work sometime.", icon:"🎉", mnemonic:"Hang out = 'treo mình ở ngoài' - đi chơi cùng nhau", visual:"Hình dung nhóm bạn tụ tập cười đùa ở quán cà phê góc phố" },
        { id:"s9", word:"day off", ipa:"/deɪ ɔf/", meaning:"ngày nghỉ", example:"I'm taking a day off tomorrow.", icon:"🏖️", mnemonic:"Day (ngày) + off (nghỉ)", visual:"Tưởng tượng bạn nằm dài trên võng, điện thoại tắt nguồn" },
        { id:"s10", word:"in a rut", ipa:"/ɪn ə rʌt/", meaning:"cảm giác nhàm chán, bế tắc", example:"I feel like I'm in a rut at work lately.", icon:"🕳️", mnemonic:"In a rut = 'kẹt trong 1 rãnh mòn' - lặp lại nhàm chán", visual:"Hình dung bánh xe quay tít nhưng xe vẫn kẹt tại chỗ trong vũng bùn" }
      ],
      phrases: [
        { id:"sp1", phrase:"How's it going?", meaning:"Dạo này thế nào?", context:"" },
        { id:"sp2", phrase:"Long time no see!", meaning:"Lâu rồi không gặp!", context:"" },
        { id:"sp3", phrase:"What have you been up to?", meaning:"Dạo này bạn làm gì rồi?", context:"" },
        { id:"sp4", phrase:"It's been a crazy week.", meaning:"Tuần này bận điên luôn.", context:"" },
        { id:"sp5", phrase:"Let's grab lunch sometime.", meaning:"Hôm nào đi ăn trưa nhé.", context:"" },
        { id:"sp6", phrase:"Same here.", meaning:"Tôi cũng vậy.", context:"" }
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
        { id:"tr1", word:"itinerary", ipa:"/aɪˈtɪnərɛri/", meaning:"lịch trình", example:"Here's our itinerary for the trip.", icon:"🗺️", mnemonic:"Itinerary nghe như 'ai tính về đâu' - lịch trình đi đâu", visual:"Tưởng tượng 1 tấm bản đồ có vẽ sẵn đường đi từng ngày bằng bút đỏ" },
        { id:"tr2", word:"layover", ipa:"/ˈleɪoʊvər/", meaning:"quá cảnh", example:"We have a 3-hour layover in Bangkok.", icon:"🛬", mnemonic:"Lay (nằm/dừng) + over (qua) = dừng qua 1 chặng giữa đường", visual:"Hình dung bạn ngồi chờ ở sân bay lạ giữa 2 chuyến bay, vali bên chân" },
        { id:"tr3", word:"check in", ipa:"/tʃɛk ɪn/", meaning:"làm thủ tục (khách sạn/sân bay)", example:"What time can we check in?", icon:"🛎️", mnemonic:"Check (kiểm tra) + in (vào) = làm thủ tục để vào", visual:"Tưởng tượng bạn đưa hộ chiếu qua quầy, nhận lại tấm vé lên máy bay" },
        { id:"tr4", word:"reservation", ipa:"/rɛzərˈveɪʃən/", meaning:"đặt chỗ", example:"I'd like to make a reservation for two.", icon:"📖", mnemonic:"Reserve = giữ chỗ trước", visual:"Hình dung cái bàn có bảng 'Reserved' dựng sẵn chờ đúng tên bạn" },
        { id:"tr5", word:"fare", ipa:"/fɛr/", meaning:"giá vé", example:"The train fare is cheaper than the bus.", icon:"🎫", mnemonic:"Fare nghe giống 'fee' (phí) - giá vé phải trả", visual:"Tưởng tượng tấm vé với con số giá tiền in đậm góc trên" },
        { id:"tr6", word:"souvenir", ipa:"/suvəˈnɪr/", meaning:"quà lưu niệm", example:"I bought some souvenirs for my family.", icon:"🎁", mnemonic:"Souvenir (gốc Pháp: 'nhớ lại') - quà để nhớ chuyến đi", visual:"Hình dung 1 món quà nhỏ nằm trong vali, mang cả mùi vị chuyến đi về nhà" },
        { id:"tr7", word:"sightseeing", ipa:"/ˈsaɪtsiɪŋ/", meaning:"tham quan", example:"We spent the day sightseeing downtown.", icon:"🏛️", mnemonic:"Sight (cảnh) + seeing (nhìn)", visual:"Tưởng tượng bạn ngửa cổ chụp ảnh tòa tháp cổ giữa nắng trưa" },
        { id:"tr8", word:"jet lag", ipa:"/dʒɛt læg/", meaning:"mệt do lệch múi giờ", example:"I'm still recovering from jet lag.", icon:"🥱", mnemonic:"Jet (máy bay) + lag (trễ) = cơ thể 'trễ nhịp' do bay xa", visual:"Hình dung mắt bạn mở thao láo lúc nửa đêm vì cơ thể vẫn còn ở múi giờ cũ" },
        { id:"tr9", word:"local cuisine", ipa:"/ˈloʊkəl kwɪˈzin/", meaning:"ẩm thực địa phương", example:"Try the local cuisine while you're there.", icon:"🍜", mnemonic:"Local (địa phương) + cuisine (ẩm thực)", visual:"Tưởng tượng đĩa thức ăn lạ bốc khói thơm ngay trước mặt bạn" },
        { id:"tr10", word:"get around", ipa:"/gɛt əˈraʊnd/", meaning:"di chuyển loanh quanh", example:"It's easy to get around the city by metro.", icon:"🚕", mnemonic:"Get around = 'đi vòng quanh' để di chuyển", visual:"Hình dung bạn nhảy lên tàu điện ngầm len lỏi khắp thành phố lạ" }
      ],
      phrases: [
        { id:"trp1", phrase:"Could you recommend a good place to eat?", meaning:"Bạn giới thiệu chỗ ăn ngon được không?", context:"" },
        { id:"trp2", phrase:"How do I get to the airport from here?", meaning:"Từ đây đến sân bay đi thế nào?", context:"" },
        { id:"trp3", phrase:"Is this seat taken?", meaning:"Chỗ này có ai ngồi chưa?", context:"" },
        { id:"trp4", phrase:"I'm just looking, thanks.", meaning:"Tôi chỉ xem thôi, cảm ơn.", context:"" },
        { id:"trp5", phrase:"Could you take a photo of us?", meaning:"Bạn chụp giúp bọn tôi tấm hình được không?", context:"" },
        { id:"trp6", phrase:"Nice to meet you.", meaning:"Rất vui được gặp bạn.", context:"" }
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
        { id:"ff1", word:"sibling", ipa:"/ˈsɪblɪŋ/", meaning:"anh chị em ruột", example:"I have two siblings, a brother and a sister.", icon:"👫", mnemonic:"Sib- gần giống 'similar' - người giống mình trong nhà", visual:"Tưởng tượng 2 đứa trẻ giành nhau 1 món đồ chơi nhưng vẫn ôm nhau ngủ" },
        { id:"ff2", word:"in-laws", ipa:"/ˈɪn lɔz/", meaning:"gia đình bên vợ/chồng", example:"We're having dinner with my in-laws this weekend.", icon:"👨‍👩‍👧", mnemonic:"In-law = 'theo luật' (hôn nhân) mà thành người nhà", visual:"Hình dung bàn ăn Tết đông đủ cả 2 bên nội ngoại" },
        { id:"ff3", word:"raise", ipa:"/reɪz/", meaning:"nuôi dạy (con)", example:"They raised three kids in a small town.", icon:"👶", mnemonic:"Raise = nâng lên, nuôi con là nâng con lớn lên", visual:"Tưởng tượng 1 đứa bé được nâng niu lớn dần lên theo năm tháng" },
        { id:"ff4", word:"get together", ipa:"/gɛt təˈgɛðər/", meaning:"tụ họp", example:"Let's get together for a family reunion.", icon:"🎉", mnemonic:"Get (đến) + together (cùng nhau) = tụ họp", visual:"Hình dung cả đại gia đình quây quần quanh 1 mâm cơm lớn" },
        { id:"ff5", word:"close friend", ipa:"/kloʊs frɛnd/", meaning:"bạn thân", example:"She's been my close friend since college.", icon:"🤝", mnemonic:"Close = gần gũi, thân thiết", visual:"Tưởng tượng 1 người bạn biết hết bí mật mà bạn chưa từng kể ai" },
        { id:"ff6", word:"keep in touch", ipa:"/kip ɪn tʌtʃ/", meaning:"giữ liên lạc", example:"We still keep in touch after all these years.", icon:"📱", mnemonic:"Keep (giữ) + in touch (trong tầm chạm) = giữ liên lạc", visual:"Hình dung sợi dây điện thoại nối 2 nơi xa cách không đứt" },
        { id:"ff7", word:"childhood", ipa:"/ˈtʃaɪldhʊd/", meaning:"thời thơ ấu", example:"We grew up together since childhood.", icon:"🧒", mnemonic:"Child (trẻ con) + hood (thời kỳ)", visual:"Tưởng tượng khu vườn tuổi thơ với cái xích đu cũ kỹ" },
        { id:"ff8", word:"relative", ipa:"/ˈrɛlətɪv/", meaning:"họ hàng", example:"Many relatives came to the wedding.", icon:"👪", mnemonic:"Relative gần giống 'relation' (mối quan hệ) - người có quan hệ huyết thống", visual:"Hình dung cây gia phả với hàng chục nhánh tên người quen" },
        { id:"ff9", word:"take after", ipa:"/teɪk ˈæftər/", meaning:"giống (ai đó trong nhà)", example:"She takes after her mother.", icon:"🧬", mnemonic:"Take after = 'lấy theo' nét của ai đó", visual:"Tưởng tượng bạn soi gương thấy y hệt nụ cười của mẹ" },
        { id:"ff10", word:"bond", ipa:"/bɑnd/", meaning:"gắn kết", example:"They share a strong bond as brothers.", icon:"❤️", mnemonic:"Bond giống 'băng dính' - dính chặt, gắn kết", visual:"Hình dung 2 bàn tay đan chặt vào nhau không rời" }
      ],
      phrases: [
        { id:"ffp1", phrase:"How's the family doing?", meaning:"Gia đình dạo này thế nào?", context:"" },
        { id:"ffp2", phrase:"We should catch up soon.", meaning:"Chúng ta nên gặp nhau sớm nhé.", context:"" },
        { id:"ffp3", phrase:"It runs in the family.", meaning:"Cái đó là 'gen di truyền' trong nhà.", context:"Dùng khi 1 tính cách/thói quen lặp lại qua các thế hệ." },
        { id:"ffp4", phrase:"I'm really close to my family.", meaning:"Tôi rất thân thiết với gia đình.", context:"" },
        { id:"ffp5", phrase:"Let's plan a family trip.", meaning:"Cùng lên kế hoạch đi chơi cả nhà nhé.", context:"" },
        { id:"ffp6", phrase:"We don't get to see each other much.", meaning:"Bọn tôi ít có dịp gặp nhau.", context:"" }
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
        { id:"sd1", word:"bargain", ipa:"/ˈbɑrgɪn/", meaning:"món hời/mặc cả", example:"I got this jacket for a bargain price.", icon:"💰", mnemonic:"Bargain nghe như 'bắt gain' - bắt được món lời", visual:"Tưởng tượng bạn cầm món hàng giá hời, mỉm cười đắc thắng" },
        { id:"sd2", word:"receipt", ipa:"/rɪˈsit/", meaning:"hóa đơn", example:"Keep the receipt in case you need to return it.", icon:"🧾", mnemonic:"Receipt - giấy nhận (receive) khi thanh toán", visual:"Hình dung tờ giấy dài in chi chít giá tiền tuột ra khỏi máy" },
        { id:"sd3", word:"refund", ipa:"/ˈriːfʌnd/", meaning:"hoàn tiền", example:"Can I get a refund for this?", icon:"💵", mnemonic:"Re (lại) + fund (tiền) = trả tiền lại", visual:"Tưởng tượng số tiền quay ngược trở lại ví bạn" },
        { id:"sd4", word:"try on", ipa:"/traɪ ɑn/", meaning:"mặc thử", example:"Can I try this on?", icon:"👕", mnemonic:"Try (thử) + on (lên người) = mặc thử", visual:"Hình dung bạn đứng trước gương phòng thử đồ, xoay 1 vòng" },
        { id:"sd5", word:"order", ipa:"/ˈɔrdər/", meaning:"gọi món", example:"Are you ready to order?", icon:"🍽️", mnemonic:"Order - ra lệnh/yêu cầu món ăn", visual:"Tưởng tượng bạn chỉ tay vào thực đơn, nói to món muốn ăn" },
        { id:"sd6", word:"reservation", ipa:"/rɛzərˈveɪʃən/", meaning:"đặt bàn", example:"I'd like to make a reservation for 7pm.", icon:"📖", mnemonic:"Reserve = giữ chỗ trước", visual:"Hình dung tấm biển nhỏ 'đã đặt trước' đặt sẵn trên bàn ăn" },
        { id:"sd7", word:"takeout", ipa:"/ˈteɪkaʊt/", meaning:"đồ ăn mang đi", example:"Let's just get takeout tonight.", icon:"🥡", mnemonic:"Take (lấy) + out (ra ngoài) = mang đi", visual:"Tưởng tượng túi đồ ăn nóng hổi xách vội trên đường về nhà" },
        { id:"sd8", word:"split the bill", ipa:"/splɪt ðə bɪl/", meaning:"chia tiền hóa đơn", example:"Should we split the bill?", icon:"💳", mnemonic:"Split (chia) + bill (hóa đơn)", visual:"Hình dung hóa đơn được cắt đôi bằng kéo tưởng tượng" },
        { id:"sd9", word:"craving", ipa:"/ˈkreɪvɪŋ/", meaning:"thèm ăn", example:"I have a craving for something sweet.", icon:"🍫", mnemonic:"Crave = thèm khát, craving = cơn thèm", visual:"Tưởng tượng miệng bạn ứa nước bọt khi nghĩ tới socola" },
        { id:"sd10", word:"leftovers", ipa:"/ˈlɛftoʊvərz/", meaning:"đồ ăn thừa", example:"We have leftovers from last night.", icon:"🍱", mnemonic:"Left (còn lại) + over (dư ra) = đồ ăn thừa", visual:"Hình dung hộp cơm còn dư được cất vào tủ lạnh tối qua" }
      ],
      phrases: [
        { id:"sdp1", phrase:"Could I get the bill, please?", meaning:"Cho tôi xin hóa đơn được không?", context:"" },
        { id:"sdp2", phrase:"Do you have this in a different size?", meaning:"Có size khác không?", context:"" },
        { id:"sdp3", phrase:"I'm just browsing, thanks.", meaning:"Tôi chỉ xem thôi, cảm ơn.", context:"" },
        { id:"sdp4", phrase:"What do you recommend?", meaning:"Bạn gợi ý món gì ngon?", context:"" },
        { id:"sdp5", phrase:"Can we get a table for two?", meaning:"Cho bàn 2 người được không?", context:"" },
        { id:"sdp6", phrase:"It's on me today.", meaning:"Hôm nay tôi mời (trả tiền).", context:"" }
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
        { id:"hw1", word:"work out", ipa:"/wɜrk aʊt/", meaning:"tập thể dục", example:"I work out three times a week.", icon:"🏋️", mnemonic:"Work (làm việc) + out = 'vận động' cơ thể ra ngoài", visual:"Tưởng tượng giọt mồ hôi rơi xuống sàn phòng gym" },
        { id:"hw2", word:"sore", ipa:"/sɔr/", meaning:"đau nhức (cơ)", example:"My legs are so sore after running.", icon:"🤕", mnemonic:"Sore nghe như 'so đau' - đau nhức", visual:"Hình dung bắp chân cứng đơ, mỗi bước đi đều nhăn mặt" },
        { id:"hw3", word:"stay fit", ipa:"/steɪ fɪt/", meaning:"giữ dáng/khỏe mạnh", example:"She stays fit by cycling every day.", icon:"🏃", mnemonic:"Stay (giữ) + fit (vừa vặn/khỏe)", visual:"Tưởng tượng cơ thể dẻo dai như lò xo không bao giờ chùng" },
        { id:"hw4", word:"come down with", ipa:"/kʌm daʊn wɪð/", meaning:"bắt đầu bị ốm", example:"I think I'm coming down with a cold.", icon:"🤒", mnemonic:"Come down = 'rớt xuống' bị bệnh ập tới", visual:"Hình dung cơn cảm cúm từ trên trời rơi thẳng xuống đầu bạn" },
        { id:"hw5", word:"recover", ipa:"/rɪˈkʌvər/", meaning:"hồi phục", example:"It took a week to recover from the flu.", icon:"🩹", mnemonic:"Re (lại) + cover (che phủ) = hồi phục lại như cũ", visual:"Tưởng tượng cơ thể tự vá lành như siêu nhân sau trận chiến" },
        { id:"hw6", word:"checkup", ipa:"/ˈtʃɛkʌp/", meaning:"khám sức khỏe định kỳ", example:"I have a checkup at the clinic tomorrow.", icon:"🩺", mnemonic:"Check (kiểm tra) + up = khám tổng quát", visual:"Hình dung bác sĩ gõ nhẹ ống nghe khắp người bạn" },
        { id:"hw7", word:"burn calories", ipa:"/bɜrn ˈkæləriz/", meaning:"đốt calo", example:"Running burns a lot of calories.", icon:"🔥", mnemonic:"Burn (đốt) + calories (năng lượng)", visual:"Tưởng tượng từng calo bốc cháy thành khói khi bạn chạy bộ" },
        { id:"hw8", word:"get some rest", ipa:"/gɛt sʌm rɛst/", meaning:"nghỉ ngơi", example:"You should get some rest.", icon:"😴", mnemonic:"Get (được) + rest (nghỉ ngơi)", visual:"Hình dung bạn chìm sâu vào chiếc gối êm, không báo thức" },
        { id:"hw9", word:"cut back on", ipa:"/kʌt bæk ɑn/", meaning:"giảm bớt (ăn/uống gì)", example:"I'm cutting back on sugar.", icon:"✂️", mnemonic:"Cut back = cắt giảm bớt lại", visual:"Tưởng tượng bạn dùng kéo cắt bớt 1 nửa miếng bánh ngọt" },
        { id:"hw10", word:"under the weather", ipa:"/ˈʌndər ðə ˈwɛðər/", meaning:"cảm thấy không khỏe", example:"I'm feeling a bit under the weather today.", icon:"🌧️", mnemonic:"'Ở dưới thời tiết xấu' = cảm thấy không khỏe", visual:"Hình dung 1 đám mây xám lơ lửng ngay trên đầu bạn" }
      ],
      phrases: [
        { id:"hwp1", phrase:"I'm trying to eat healthier.", meaning:"Tôi đang cố ăn uống lành mạnh hơn.", context:"" },
        { id:"hwp2", phrase:"Take care of yourself.", meaning:"Giữ gìn sức khỏe nhé.", context:"" },
        { id:"hwp3", phrase:"I haven't been sleeping well.", meaning:"Dạo này tôi ngủ không ngon.", context:"" },
        { id:"hwp4", phrase:"Get well soon!", meaning:"Mau khỏe nhé!", context:"" },
        { id:"hwp5", phrase:"I need to see a doctor.", meaning:"Tôi cần đi khám bác sĩ.", context:"" },
        { id:"hwp6", phrase:"Let's go for a walk.", meaning:"Đi dạo chút nhé.", context:"" }
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
        { id:"hd1", word:"chores", ipa:"/tʃɔrz/", meaning:"việc nhà", example:"I do the chores every weekend.", icon:"🧹", mnemonic:"Chores - những việc lặt vặt hàng ngày trong nhà", visual:"Tưởng tượng danh sách việc nhà dán đầy tủ lạnh" },
        { id:"hd2", word:"run errands", ipa:"/rʌn ˈɛrəndz/", meaning:"đi làm việc vặt", example:"I need to run some errands this afternoon.", icon:"🏃‍♀️", mnemonic:"Run (chạy) + errands (việc vặt) = chạy đi làm việc vặt", visual:"Hình dung bạn chạy xe máy ghé 5 chỗ trong 1 buổi chiều" },
        { id:"hd3", word:"tidy up", ipa:"/ˈtaɪdi ʌp/", meaning:"dọn dẹp gọn gàng", example:"Let's tidy up before guests arrive.", icon:"🧺", mnemonic:"Tidy = gọn gàng, tidy up = dọn cho gọn", visual:"Tưởng tượng cả căn phòng bừa bộn được xếp gọn trong 10 phút" },
        { id:"hd4", word:"move in", ipa:"/muv ɪn/", meaning:"dọn vào (nhà mới)", example:"We just moved in last month.", icon:"📦", mnemonic:"Move (di chuyển) + in (vào) = dọn vào nhà mới", visual:"Hình dung thùng carton chất đầy phòng khách nhà mới" },
        { id:"hd5", word:"utility bill", ipa:"/juˈtɪləti bɪl/", meaning:"hóa đơn điện nước", example:"I need to pay the utility bill.", icon:"💡", mnemonic:"Utility (tiện ích) + bill (hóa đơn)", visual:"Tưởng tượng tờ hóa đơn điện nước rơi vào hộp thư mỗi tháng" },
        { id:"hd6", word:"neighbor", ipa:"/ˈneɪbər/", meaning:"hàng xóm", example:"My neighbor is very friendly.", icon:"🏘️", mnemonic:"Neigh- gần giống 'near' (gần) - người ở gần nhà", visual:"Hình dung tiếng gõ cửa thân thiện từ nhà sát vách" },
        { id:"hd7", word:"broken", ipa:"/ˈbroʊkən/", meaning:"bị hỏng", example:"The washing machine is broken again.", icon:"🔧", mnemonic:"Break (vỡ) → broken (đã bị hỏng)", visual:"Tưởng tượng cái máy giặt kêu cạch 1 tiếng rồi im bặt" },
        { id:"hd8", word:"fix up", ipa:"/fɪks ʌp/", meaning:"sửa sang lại", example:"We're fixing up the kitchen this month.", icon:"🛠️", mnemonic:"Fix (sửa) + up = sửa sang lại cho mới", visual:"Hình dung căn bếp cũ được sơn mới toanh, sáng bừng" },
        { id:"hd9", word:"day-to-day", ipa:"/deɪ tə deɪ/", meaning:"hàng ngày, thường nhật", example:"It's just part of my day-to-day routine.", icon:"📅", mnemonic:"Day to day = từ ngày này qua ngày khác", visual:"Tưởng tượng cuốn lịch lật từng trang giống hệt nhau mỗi ngày" },
        { id:"hd10", word:"get used to", ipa:"/gɛt juzd tə/", meaning:"quen với", example:"I'm getting used to the new schedule.", icon:"🔄", mnemonic:"Get used to = dần trở nên quen thuộc", visual:"Hình dung đôi giày mới ban đầu cấn chân rồi dần vừa khít" }
      ],
      phrases: [
        { id:"hdp1", phrase:"I need to run some errands today.", meaning:"Hôm nay tôi cần đi làm vài việc vặt.", context:"" },
        { id:"hdp2", phrase:"Make yourself at home.", meaning:"Cứ tự nhiên như ở nhà nhé.", context:"" },
        { id:"hdp3", phrase:"It's such a hassle.", meaning:"Thật là phiền phức.", context:"" },
        { id:"hdp4", phrase:"I'm still settling in.", meaning:"Tôi vẫn đang ổn định chỗ ở mới.", context:"" },
        { id:"hdp5", phrase:"Could you keep it down? The neighbors might hear.", meaning:"Nhỏ tiếng chút, hàng xóm nghe đó.", context:"" },
        { id:"hdp6", phrase:"Let's split the housework.", meaning:"Cùng chia việc nhà nhé.", context:"" }
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
        { id:"he1", word:"binge-watch", ipa:"/bɪndʒ wɑtʃ/", meaning:"xem liên tục nhiều tập", example:"I binge-watched the whole series in a weekend.", icon:"📺", mnemonic:"Binge = ăn/xem thả ga không dừng", visual:"Tưởng tượng bạn ngồi 1 chỗ từ sáng tới tối, mắt dán vào màn hình" },
        { id:"he2", word:"spoiler", ipa:"/ˈspɔɪlər/", meaning:"tình tiết bị lộ", example:"Don't give me any spoilers!", icon:"🙊", mnemonic:"Spoil = làm hỏng, spoiler làm hỏng bất ngờ của phim", visual:"Hình dung ai đó bịt miệng bạn lại trước khi kịp nói ra kết phim" },
        { id:"he3", word:"get into", ipa:"/gɛt ˈɪntu/", meaning:"bắt đầu thích/đam mê", example:"I recently got into painting.", icon:"🎸", mnemonic:"Get into = 'đi vào' 1 sở thích mới", visual:"Tưởng tượng bạn bước hẳn vào 1 thế giới sở thích mới toanh" },
        { id:"he4", word:"hang out", ipa:"/hæŋ aʊt/", meaning:"đi chơi cùng nhau", example:"We hung out at the park all afternoon.", icon:"🎉", mnemonic:"Hang out = 'treo mình ở ngoài' - đi chơi", visual:"Hình dung nhóm bạn ngồi bệt công viên cười vang cả buổi chiều" },
        { id:"he5", word:"day trip", ipa:"/deɪ trɪp/", meaning:"chuyến đi trong ngày", example:"We took a day trip to the beach.", icon:"🚗", mnemonic:"Day (ngày) + trip (chuyến đi)", visual:"Tưởng tượng bạn đi từ sáng sớm và về lại nhà đúng lúc trời tối" },
        { id:"he6", word:"laid-back", ipa:"/leɪd bæk/", meaning:"thoải mái, không gò bó", example:"It was a laid-back weekend at home.", icon:"😌", mnemonic:"Laid back = 'nằm ngả ra sau' - thư thái", visual:"Hình dung bạn nằm dài trên ghế võng, chẳng lo nghĩ gì" },
        { id:"he7", word:"playlist", ipa:"/ˈpleɪlɪst/", meaning:"danh sách nhạc", example:"Can you share your workout playlist?", icon:"🎵", mnemonic:"Play (phát) + list (danh sách)", visual:"Tưởng tượng 1 chuỗi bài hát nối đuôi nhau không dứt" },
        { id:"he8", word:"board game", ipa:"/bɔrd geɪm/", meaning:"trò chơi cờ bàn", example:"Let's play a board game tonight.", icon:"🎲", mnemonic:"Board (bàn cờ) + game (trò chơi)", visual:"Hình dung cả nhà ngồi quanh bàn, xúc xắc lăn trên mặt bàn gỗ" },
        { id:"he9", word:"hobby", ipa:"/ˈhɑbi/", meaning:"sở thích", example:"Photography has become my favorite hobby.", icon:"🎨", mnemonic:"Hobby - từ quen thuộc, sở thích cá nhân", visual:"Tưởng tượng đôi tay bạn lấm màu vẽ sau giờ làm" },
        { id:"he10", word:"unwind", ipa:"/ʌnˈwaɪnd/", meaning:"thư giãn, xả stress", example:"I like to unwind by reading before bed.", icon:"🧘", mnemonic:"Un-wind = 'tháo dây cót' đã lên dây căng thẳng", visual:"Hình dung sợi dây cót đồng hồ được tháo lỏng dần ra" }
      ],
      phrases: [
        { id:"hep1", phrase:"What do you do for fun?", meaning:"Bạn thường làm gì để giải trí?", context:"" },
        { id:"hep2", phrase:"I'm really into it lately.", meaning:"Dạo này tôi mê cái đó lắm.", context:"" },
        { id:"hep3", phrase:"Let's binge-watch this show.", meaning:"Cùng cày phim này đi.", context:"" },
        { id:"hep4", phrase:"It really helps me unwind.", meaning:"Cái đó giúp tôi thư giãn hẳn.", context:"" },
        { id:"hep5", phrase:"Count me in!", meaning:"Cho tôi tham gia với!", context:"" },
        { id:"hep6", phrase:"I could use a break.", meaning:"Tôi cần nghỉ xả hơi chút.", context:"" }
      ]
    }
  ]
};

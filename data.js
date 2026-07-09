// Nội dung học: Banking/Fintech + IT + Giao tiếp công sở + Đời sống
// Mỗi topic: words (từ vựng) + phrases (cụm câu giao tiếp)
const VOCAB_DATA = {
  topics: [
    {
      id: "meetings", name: "Họp & Thảo luận công việc", icon: "🗓️", color: "#4F46E5",
      words: [
        { id:"m1", word:"agenda", ipa:"/əˈdʒendə/", meaning:"chương trình họp", example:"Let's stick to the agenda so we finish on time.", icon:"📋", mnemonic:"A-GEN-đa: tờ giấy ghi các mục cần bàn trong họp" },
        { id:"m2", word:"minutes", ipa:"/ˈmɪnɪts/", meaning:"biên bản họp", example:"Can you take the minutes for this meeting?", icon:"📝", mnemonic:"Minutes = phút, nghĩa bóng: ghi lại từng phút họp" },
        { id:"m3", word:"stakeholder", ipa:"/ˈsteɪkhoʊldər/", meaning:"bên liên quan", example:"We need sign-off from all stakeholders.", icon:"🤝", mnemonic:"Stake (cổ phần) + holder (người giữ)" },
        { id:"m4", word:"deadline", ipa:"/ˈdɛdlaɪn/", meaning:"hạn chót", example:"The deadline for this report is Friday.", icon:"⏰", mnemonic:"Dead-line: qua vạch này là 'chết' hạn" },
        { id:"m5", word:"follow up", ipa:"/ˈfɑloʊ ʌp/", meaning:"theo dõi/nhắc lại sau", example:"I'll follow up with you by email.", icon:"🔁", mnemonic:"" },
        { id:"m6", word:"postpone", ipa:"/poʊstˈpoʊn/", meaning:"hoãn lại", example:"We had to postpone the meeting to next week.", icon:"⏸️", mnemonic:"Post (sau) + pone (đặt) = đặt ra sau" },
        { id:"m7", word:"brainstorm", ipa:"/ˈbreɪnstɔrm/", meaning:"động não", example:"Let's brainstorm some ideas before deciding.", icon:"🌪️", mnemonic:"Brain (não) + storm (bão) = ý tưởng tuôn ra" },
        { id:"m8", word:"bring up", ipa:"/brɪŋ ʌp/", meaning:"nêu ra (vấn đề)", example:"She brought up a good point about the budget.", icon:"💬", mnemonic:"" },
        { id:"m9", word:"on the same page", ipa:"/ɑn ðə seɪm peɪdʒ/", meaning:"cùng hiểu như nhau", example:"Let's make sure we're all on the same page.", icon:"📖", mnemonic:"" },
        { id:"m10", word:"touch base", ipa:"/tʌtʃ beɪs/", meaning:"trao đổi nhanh", example:"Let's touch base tomorrow morning.", icon:"📞", mnemonic:"Touch (chạm) + base (căn cứ) = kiểm tra nhanh" },
        { id:"m11", word:"take the floor", ipa:"/teɪk ðə flɔr/", meaning:"phát biểu tiếp", example:"I'd like to take the floor now, if that's okay.", icon:"🎤", mnemonic:"" },
        { id:"m12", word:"wrap up", ipa:"/ræp ʌp/", meaning:"kết thúc/tổng kết", example:"Let's wrap up the meeting with next steps.", icon:"🎁", mnemonic:"Wrap = gói lại, giống gói quà xong = xong việc" }
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
      id: "email_chat", name: "Email & Chat công sở", icon: "📧", color: "#0EA5E9",
      words: [
        { id:"e1", word:"attach", ipa:"/əˈtætʃ/", meaning:"đính kèm", example:"I've attached the file to this email.", icon:"📎", mnemonic:"" },
        { id:"e2", word:"cc", ipa:"/siː siː/", meaning:"gửi bản sao cho", example:"Please cc my manager on this email.", icon:"📤", mnemonic:"Carbon Copy = bản sao carbon (thời xưa)" },
        { id:"e3", word:"reply-all", ipa:"/rɪˈplaɪ ɔl/", meaning:"trả lời tất cả", example:"Please don't reply-all unless it's necessary.", icon:"↩️", mnemonic:"" },
        { id:"e4", word:"draft", ipa:"/dræft/", meaning:"bản nháp", example:"This is just a draft, feel free to edit it.", icon:"✏️", mnemonic:"" },
        { id:"e5", word:"escalate", ipa:"/ˈɛskəleɪt/", meaning:"đẩy lên cấp cao hơn", example:"If there's no response, we'll escalate this issue.", icon:"📈", mnemonic:"Escalate ~ escalator (thang cuốn) = đẩy lên cao" },
        { id:"e6", word:"prompt", ipa:"/prɑmpt/", meaning:"nhanh chóng, kịp thời", example:"Thank you for your prompt reply.", icon:"⚡", mnemonic:"" },
        { id:"e7", word:"per my last email", ipa:"/pər maɪ læst ˈiːmeɪl/", meaning:"như tôi đã nói ở email trước", example:"Per my last email, the deadline is Monday.", icon:"🔁", mnemonic:"Câu 'nhắc khéo' kinh điển dân công sở" },
        { id:"e8", word:"kindly", ipa:"/ˈkaɪndli/", meaning:"vui lòng", example:"Kindly review the attached document.", icon:"🙏", mnemonic:"" },
        { id:"e9", word:"touch point", ipa:"/tʌtʃ pɔɪnt/", meaning:"điểm liên hệ/tương tác", example:"This email is a touch point before our call.", icon:"📍", mnemonic:"" },
        { id:"e10", word:"out of office", ipa:"/aʊt əv ˈɔfɪs/", meaning:"vắng mặt tại văn phòng", example:"I'll be out of office next week.", icon:"🌴", mnemonic:"Viết tắt: OOO" }
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
      id: "banking_fintech", name: "Ngân hàng số & Fintech", icon: "🏦", color: "#16A34A",
      words: [
        { id:"b1", word:"transaction", ipa:"/trænˈzækʃən/", meaning:"giao dịch", example:"The transaction failed due to insufficient balance.", icon:"💳", mnemonic:"" },
        { id:"b2", word:"authentication", ipa:"/ɔːθɛntɪˈkeɪʃən/", meaning:"xác thực", example:"Two-factor authentication adds an extra layer of security.", icon:"🔐", mnemonic:"Auth(entic) giống 'authentic' = xác thực thật" },
        { id:"b3", word:"onboarding", ipa:"/ˈɑnbɔrdɪŋ/", meaning:"quy trình mở tài khoản/gia nhập", example:"The onboarding process for new merchants takes 3 days.", icon:"🛬", mnemonic:"On-board = lên tàu/máy bay, ý là 'gia nhập'" },
        { id:"b4", word:"merchant", ipa:"/ˈmɜrtʃənt/", meaning:"người bán/đối tác kinh doanh", example:"Merchants can accept payments via QR code.", icon:"🏪", mnemonic:"" },
        { id:"b5", word:"loan disbursement", ipa:"/loʊn dɪsˈbɜrsmənt/", meaning:"giải ngân khoản vay", example:"Loan disbursement happens within 24 hours of approval.", icon:"💰", mnemonic:"" },
        { id:"b6", word:"credit limit", ipa:"/ˈkrɛdɪt ˈlɪmɪt/", meaning:"hạn mức tín dụng", example:"Your credit limit has been increased.", icon:"📊", mnemonic:"" },
        { id:"b7", word:"fraud detection", ipa:"/frɔd dɪˈtɛkʃən/", meaning:"phát hiện gian lận", example:"Our system uses AI for fraud detection.", icon:"🕵️", mnemonic:"" },
        { id:"b8", word:"compliance", ipa:"/kəmˈplaɪəns/", meaning:"tuân thủ (quy định)", example:"All transactions must meet compliance requirements.", icon:"✅", mnemonic:"Comply = tuân theo → compliance = sự tuân thủ" },
        { id:"b9", word:"e-KYC", ipa:"/iː keɪ waɪ siː/", meaning:"định danh khách hàng điện tử", example:"e-KYC lets customers verify identity remotely.", icon:"🪪", mnemonic:"Know Your Customer" },
        { id:"b10", word:"downtime", ipa:"/ˈdaʊntaɪm/", meaning:"thời gian hệ thống ngừng hoạt động", example:"We scheduled maintenance during low-traffic downtime.", icon:"🔻", mnemonic:"" }
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
      id: "agile_dev", name: "Agile & Phát triển phần mềm", icon: "💻", color: "#DB2777",
      words: [
        { id:"a1", word:"sprint", ipa:"/sprɪnt/", meaning:"chu kỳ làm việc ngắn", example:"We're in the middle of a two-week sprint.", icon:"🏃", mnemonic:"" },
        { id:"a2", word:"backlog", ipa:"/ˈbæklɔg/", meaning:"danh sách việc tồn đọng", example:"Add this task to the backlog.", icon:"📚", mnemonic:"" },
        { id:"a3", word:"bug", ipa:"/bʌg/", meaning:"lỗi phần mềm", example:"There's a bug in the login screen.", icon:"🐛", mnemonic:"" },
        { id:"a4", word:"deploy", ipa:"/dɪˈplɔɪ/", meaning:"triển khai", example:"We'll deploy the update tonight.", icon:"🚀", mnemonic:"" },
        { id:"a5", word:"rollback", ipa:"/ˈroʊlbæk/", meaning:"hoàn tác về bản trước", example:"We had to rollback the release due to crashes.", icon:"⏪", mnemonic:"Roll back = lăn ngược lại" },
        { id:"a6", word:"code review", ipa:"/koʊd rɪˈvjuː/", meaning:"kiểm tra mã nguồn", example:"Please request a code review before merging.", icon:"🔍", mnemonic:"" },
        { id:"a7", word:"merge conflict", ipa:"/mɜrdʒ ˈkɑnflɪkt/", meaning:"xung đột khi gộp code", example:"I'm resolving a merge conflict right now.", icon:"⚔️", mnemonic:"" },
        { id:"a8", word:"QA", ipa:"/kjuː eɪ/", meaning:"kiểm thử chất lượng", example:"QA found a critical issue before release.", icon:"🧪", mnemonic:"Quality Assurance" },
        { id:"a9", word:"tech debt", ipa:"/tɛk dɛt/", meaning:"nợ kỹ thuật", example:"We need to pay down some tech debt this quarter.", icon:"💳", mnemonic:"Giống nợ tiền (debt) nhưng là nợ code xấu" },
        { id:"a10", word:"root cause", ipa:"/rut kɔz/", meaning:"nguyên nhân gốc rễ", example:"Let's find the root cause before fixing it.", icon:"🌳", mnemonic:"" }
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
      id: "presentations", name: "Thuyết trình & Báo cáo", icon: "📊", color: "#EA580C",
      words: [
        { id:"pr1", word:"overview", ipa:"/ˈoʊvərvjuː/", meaning:"tổng quan", example:"Let me start with a brief overview.", icon:"🔭", mnemonic:"" },
        { id:"pr2", word:"highlight", ipa:"/ˈhaɪlaɪt/", meaning:"điểm nổi bật", example:"The key highlight this quarter is revenue growth.", icon:"✨", mnemonic:"" },
        { id:"pr3", word:"milestone", ipa:"/ˈmaɪlstoʊn/", meaning:"cột mốc quan trọng", example:"We hit an important milestone last month.", icon:"🚩", mnemonic:"" },
        { id:"pr4", word:"takeaway", ipa:"/ˈteɪkəweɪ/", meaning:"điều rút ra được", example:"The main takeaway is that we need more testing.", icon:"🎯", mnemonic:"Take away = mang đi, ý là 'mang về bài học'" },
        { id:"pr5", word:"trend", ipa:"/trɛnd/", meaning:"xu hướng", example:"There's an upward trend in mobile users.", icon:"📈", mnemonic:"" },
        { id:"pr6", word:"audience", ipa:"/ˈɔdiəns/", meaning:"khán giả/người nghe", example:"Know your audience before preparing slides.", icon:"👥", mnemonic:"" },
        { id:"pr7", word:"visual aid", ipa:"/ˈvɪʒuəl eɪd/", meaning:"công cụ trực quan", example:"Use visual aids to explain complex data.", icon:"🖼️", mnemonic:"" },
        { id:"pr8", word:"Q&A", ipa:"/kjuː ænd eɪ/", meaning:"hỏi đáp", example:"We'll open the floor for Q&A at the end.", icon:"❓", mnemonic:"" },
        { id:"pr9", word:"bottom line", ipa:"/ˈbɑtəm laɪn/", meaning:"kết luận/điểm mấu chốt", example:"The bottom line is we need more budget.", icon:"📉", mnemonic:"" },
        { id:"pr10", word:"rundown", ipa:"/ˈrʌndaʊn/", meaning:"tóm tắt nhanh", example:"Here's a quick rundown of today's topics.", icon:"📃", mnemonic:"" }
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
      id: "negotiation", name: "Thương lượng & Thuyết phục", icon: "🤝", color: "#7C3AED",
      words: [
        { id:"n1", word:"compromise", ipa:"/ˈkɑmprəmaɪz/", meaning:"thỏa hiệp", example:"We need to find a compromise both sides accept.", icon:"⚖️", mnemonic:"" },
        { id:"n2", word:"leverage", ipa:"/ˈlɛvərɪdʒ/", meaning:"đòn bẩy/tận dụng", example:"We can leverage our existing user base.", icon:"🏋️", mnemonic:"" },
        { id:"n3", word:"trade-off", ipa:"/treɪd ɔf/", meaning:"đánh đổi", example:"There's a trade-off between speed and quality.", icon:"↔️", mnemonic:"" },
        { id:"n4", word:"concession", ipa:"/kənˈsɛʃən/", meaning:"sự nhượng bộ", example:"We made a small concession on the price.", icon:"🤲", mnemonic:"" },
        { id:"n5", word:"counteroffer", ipa:"/ˈkaʊntərɔfər/", meaning:"đề nghị phản hồi lại", example:"They sent a counteroffer with a longer timeline.", icon:"🔄", mnemonic:"Counter (đối lại) + offer (đề nghị)" },
        { id:"n6", word:"win-win", ipa:"/wɪn wɪn/", meaning:"hai bên cùng có lợi", example:"Let's aim for a win-win solution.", icon:"🏆", mnemonic:"" },
        { id:"n7", word:"non-negotiable", ipa:"/nɑn nɪˈgoʊʃiəbəl/", meaning:"không thể thương lượng", example:"The security requirement is non-negotiable.", icon:"🚫", mnemonic:"" },
        { id:"n8", word:"flexible", ipa:"/ˈflɛksəbəl/", meaning:"linh hoạt", example:"We're flexible on the delivery date.", icon:"🤸", mnemonic:"" },
        { id:"n9", word:"deal-breaker", ipa:"/diːl breɪkər/", meaning:"yếu tố khiến thỏa thuận đổ vỡ", example:"Price is not a deal-breaker for us.", icon:"💥", mnemonic:"" },
        { id:"n10", word:"stall", ipa:"/stɔl/", meaning:"trì hoãn/câu giờ", example:"They're stalling to get a better deal.", icon:"⏳", mnemonic:"" }
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
      id: "calls_meetings", name: "Gọi điện & Họp online", icon: "📞", color: "#0891B2",
      words: [
        { id:"c1", word:"mute", ipa:"/mjut/", meaning:"tắt tiếng", example:"You're on mute, can you unmute?", icon:"🔇", mnemonic:"" },
        { id:"c2", word:"lag", ipa:"/læg/", meaning:"độ trễ", example:"There's some lag in the connection.", icon:"🐌", mnemonic:"" },
        { id:"c3", word:"dial in", ipa:"/ˈdaɪəl ɪn/", meaning:"gọi vào (cuộc họp)", example:"Please dial in five minutes early.", icon:"☎️", mnemonic:"" },
        { id:"c4", word:"reschedule", ipa:"/riˈskɛdʒuːl/", meaning:"dời lịch", example:"Can we reschedule to tomorrow afternoon?", icon:"📅", mnemonic:"" },
        { id:"c5", word:"breakout room", ipa:"/ˈbreɪkaʊt rum/", meaning:"phòng họp nhóm nhỏ", example:"We'll split into breakout rooms for discussion.", icon:"🚪", mnemonic:"" },
        { id:"c6", word:"screen share", ipa:"/skrin ʃɛr/", meaning:"chia sẻ màn hình", example:"Can you share your screen?", icon:"🖥️", mnemonic:"" },
        { id:"c7", word:"freeze", ipa:"/friz/", meaning:"đơ/đứng hình", example:"Your video just froze for a second.", icon:"🥶", mnemonic:"" },
        { id:"c8", word:"connection drop", ipa:"/kəˈnɛkʃən drɑp/", meaning:"rớt kết nối", example:"I got disconnected, sorry for the connection drop.", icon:"📉", mnemonic:"" },
        { id:"c9", word:"agenda item", ipa:"/əˈdʒɛndə ˈaɪtəm/", meaning:"mục trong chương trình họp", example:"Let's move to the next agenda item.", icon:"📌", mnemonic:"" },
        { id:"c10", word:"background noise", ipa:"/ˈbækgraʊnd nɔɪz/", meaning:"tiếng ồn xung quanh", example:"Sorry about the background noise.", icon:"🔊", mnemonic:"" }
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
      id: "troubleshooting", name: "Xử lý sự cố & Hỗ trợ", icon: "🛠️", color: "#B91C1C",
      words: [
        { id:"t1", word:"issue", ipa:"/ˈɪʃuː/", meaning:"vấn đề/sự cố", example:"We're looking into the issue now.", icon:"⚠️", mnemonic:"" },
        { id:"t2", word:"glitch", ipa:"/glɪtʃ/", meaning:"trục trặc nhỏ", example:"There was a minor glitch in the app.", icon:"⚡", mnemonic:"" },
        { id:"t3", word:"workaround", ipa:"/ˈwɜrkəraʊnd/", meaning:"giải pháp tạm thời", example:"Here's a workaround until the fix is deployed.", icon:"🔀", mnemonic:"Work (làm) + around (vòng qua) = né lỗi tạm" },
        { id:"t4", word:"reproduce", ipa:"/riprəˈdus/", meaning:"tái tạo lại (lỗi)", example:"I can't reproduce the bug on my end.", icon:"🔁", mnemonic:"" },
        { id:"t5", word:"incident", ipa:"/ˈɪnsɪdənt/", meaning:"sự cố nghiêm trọng", example:"This is a P1 incident, all hands on deck.", icon:"🚨", mnemonic:"" },
        { id:"t6", word:"root cause analysis", ipa:"/rut kɔz əˈnæləsɪs/", meaning:"phân tích nguyên nhân gốc", example:"We'll do a root cause analysis after this is resolved.", icon:"🔬", mnemonic:"" },
        { id:"t7", word:"escalation", ipa:"/ɛskəˈleɪʃən/", meaning:"việc đẩy vấn đề lên cấp cao hơn", example:"This requires escalation to the infra team.", icon:"📶", mnemonic:"" },
        { id:"t8", word:"patch", ipa:"/pætʃ/", meaning:"bản vá", example:"We released a patch to fix the crash.", icon:"🩹", mnemonic:"" },
        { id:"t9", word:"all hands on deck", ipa:"/ɔl hændz ɑn dɛk/", meaning:"huy động toàn lực", example:"It's all hands on deck until this is fixed.", icon:"🚢", mnemonic:"" },
        { id:"t10", word:"troubleshoot", ipa:"/ˈtrʌbəlʃut/", meaning:"khắc phục sự cố", example:"Let's troubleshoot this step by step.", icon:"🔧", mnemonic:"Trouble (rắc rối) + shoot (bắn hạ)" }
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
      id: "feedback_review", name: "Phản hồi & Đánh giá công việc", icon: "🗣️", color: "#CA8A04",
      words: [
        { id:"f1", word:"constructive", ipa:"/kənˈstrʌktɪv/", meaning:"mang tính xây dựng", example:"Please give me constructive feedback.", icon:"🏗️", mnemonic:"" },
        { id:"f2", word:"strength", ipa:"/strɛŋθ/", meaning:"điểm mạnh", example:"Communication is one of your strengths.", icon:"💪", mnemonic:"" },
        { id:"f3", word:"area for improvement", ipa:"/ˈɛriə fɔr ɪmˈpruvmənt/", meaning:"điểm cần cải thiện", example:"Time management is an area for improvement.", icon:"📈", mnemonic:"" },
        { id:"f4", word:"accomplishment", ipa:"/əˈkɑmplɪʃmənt/", meaning:"thành tựu", example:"List your key accomplishments this year.", icon:"🏅", mnemonic:"" },
        { id:"f5", word:"underperform", ipa:"/ʌndərpərˈfɔrm/", meaning:"làm việc dưới kỳ vọng", example:"The team underperformed this quarter.", icon:"📉", mnemonic:"Under (dưới) + perform (thể hiện)" },
        { id:"f6", word:"recognition", ipa:"/rɛkəgˈnɪʃən/", meaning:"sự công nhận", example:"She received recognition for her hard work.", icon:"🏆", mnemonic:"" },
        { id:"f7", word:"self-assessment", ipa:"/sɛlf əˈsɛsmənt/", meaning:"tự đánh giá", example:"Please complete your self-assessment by Friday.", icon:"🪞", mnemonic:"" },
        { id:"f8", word:"objective", ipa:"/əbˈdʒɛktɪv/", meaning:"mục tiêu", example:"Let's set clear objectives for next quarter.", icon:"🎯", mnemonic:"" },
        { id:"f9", word:"candid", ipa:"/ˈkændɪd/", meaning:"thẳng thắn", example:"I'd like to be candid with you about this.", icon:"🗣️", mnemonic:"" },
        { id:"f10", word:"growth mindset", ipa:"/groʊθ ˈmaɪndsɛt/", meaning:"tư duy cầu tiến", example:"She approaches challenges with a growth mindset.", icon:"🌱", mnemonic:"" }
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
      id: "smalltalk_daily", name: "Giao tiếp xã giao & Đời sống công sở", icon: "☕", color: "#65A30D",
      words: [
        { id:"s1", word:"catch up", ipa:"/kætʃ ʌp/", meaning:"trò chuyện cập nhật", example:"We should catch up over coffee sometime.", icon:"☕", mnemonic:"" },
        { id:"s2", word:"weekend", ipa:"/ˈwikɛnd/", meaning:"cuối tuần", example:"How was your weekend?", icon:"🌞", mnemonic:"" },
        { id:"s3", word:"commute", ipa:"/kəˈmjut/", meaning:"di chuyển đi làm", example:"My commute takes about 30 minutes.", icon:"🚗", mnemonic:"" },
        { id:"s4", word:"burnout", ipa:"/ˈbɜrnaʊt/", meaning:"kiệt sức vì công việc", example:"He's feeling a bit of burnout lately.", icon:"🔥", mnemonic:"Burn (cháy) + out (hết) = cháy hết năng lượng" },
        { id:"s5", word:"work-life balance", ipa:"/wɜrk laɪf ˈbæləns/", meaning:"cân bằng công việc-cuộc sống", example:"It's important to maintain work-life balance.", icon:"⚖️", mnemonic:"" },
        { id:"s6", word:"get along", ipa:"/gɛt əˈlɔŋ/", meaning:"hòa hợp với nhau", example:"I get along well with my teammates.", icon:"🤗", mnemonic:"" },
        { id:"s7", word:"small talk", ipa:"/smɔl tɔk/", meaning:"chuyện phiếm", example:"He's good at small talk with clients.", icon:"💬", mnemonic:"" },
        { id:"s8", word:"hang out", ipa:"/hæŋ aʊt/", meaning:"đi chơi/tụ tập", example:"Let's hang out after work sometime.", icon:"🎉", mnemonic:"" },
        { id:"s9", word:"day off", ipa:"/deɪ ɔf/", meaning:"ngày nghỉ", example:"I'm taking a day off tomorrow.", icon:"🏖️", mnemonic:"" },
        { id:"s10", word:"in a rut", ipa:"/ɪn ə rʌt/", meaning:"cảm giác nhàm chán, bế tắc", example:"I feel like I'm in a rut at work lately.", icon:"🕳️", mnemonic:"" }
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
      id: "travel_social", name: "Du lịch & Giao tiếp xã hội", icon: "✈️", color: "#0D9488",
      words: [
        { id:"tr1", word:"itinerary", ipa:"/aɪˈtɪnərɛri/", meaning:"lịch trình", example:"Here's our itinerary for the trip.", icon:"🗺️", mnemonic:"" },
        { id:"tr2", word:"layover", ipa:"/ˈleɪoʊvər/", meaning:"quá cảnh", example:"We have a 3-hour layover in Bangkok.", icon:"🛬", mnemonic:"" },
        { id:"tr3", word:"check in", ipa:"/tʃɛk ɪn/", meaning:"làm thủ tục (khách sạn/sân bay)", example:"What time can we check in?", icon:"🛎️", mnemonic:"" },
        { id:"tr4", word:"reservation", ipa:"/rɛzərˈveɪʃən/", meaning:"đặt chỗ", example:"I'd like to make a reservation for two.", icon:"📖", mnemonic:"" },
        { id:"tr5", word:"fare", ipa:"/fɛr/", meaning:"giá vé", example:"The train fare is cheaper than the bus.", icon:"🎫", mnemonic:"" },
        { id:"tr6", word:"souvenir", ipa:"/suvəˈnɪr/", meaning:"quà lưu niệm", example:"I bought some souvenirs for my family.", icon:"🎁", mnemonic:"" },
        { id:"tr7", word:"sightseeing", ipa:"/ˈsaɪtsiɪŋ/", meaning:"tham quan", example:"We spent the day sightseeing downtown.", icon:"🏛️", mnemonic:"Sight (cảnh) + seeing (nhìn)" },
        { id:"tr8", word:"jet lag", ipa:"/dʒɛt læg/", meaning:"mệt do lệch múi giờ", example:"I'm still recovering from jet lag.", icon:"🥱", mnemonic:"" },
        { id:"tr9", word:"local cuisine", ipa:"/ˈloʊkəl kwɪˈzin/", meaning:"ẩm thực địa phương", example:"Try the local cuisine while you're there.", icon:"🍜", mnemonic:"" },
        { id:"tr10", word:"get around", ipa:"/gɛt əˈraʊnd/", meaning:"di chuyển loanh quanh", example:"It's easy to get around the city by metro.", icon:"🚕", mnemonic:"" }
      ],
      phrases: [
        { id:"trp1", phrase:"Could you recommend a good place to eat?", meaning:"Bạn giới thiệu chỗ ăn ngon được không?", context:"" },
        { id:"trp2", phrase:"How do I get to the airport from here?", meaning:"Từ đây đến sân bay đi thế nào?", context:"" },
        { id:"trp3", phrase:"Is this seat taken?", meaning:"Chỗ này có ai ngồi chưa?", context:"" },
        { id:"trp4", phrase:"I'm just looking, thanks.", meaning:"Tôi chỉ xem thôi, cảm ơn.", context:"" },
        { id:"trp5", phrase:"Could you take a photo of us?", meaning:"Bạn chụp giúp bọn tôi tấm hình được không?", context:"" },
        { id:"trp6", phrase:"Nice to meet you.", meaning:"Rất vui được gặp bạn.", context:"" }
      ]
    }
  ]
};

// متغيرات النظام العام
let globalScore = 0;
let globalLevel = 1;
let totalCorrect = 0;
let totalQuestions = 0;
let currentStreak = 0;

// تحديث لوحة النقاط الرئيسية
function updateScoreBoard() {
    document.getElementById('totalScore').textContent = globalScore;
    document.getElementById('level').textContent = globalLevel;
    
    const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 100;
    document.getElementById('accuracy').textContent = accuracy + '%';
    document.getElementById('streak').textContent = currentStreak;
    
    // تحديث المستوى بناءً على النقاط
    globalLevel = Math.floor(globalScore / 100) + 1;
    
    // حفظ في localStorage
    localStorage.setItem('globalScore', globalScore);
    localStorage.setItem('globalLevel', globalLevel);
}

// تحميل البيانات المحفوظة
function loadSavedData() {
    const savedScore = localStorage.getItem('globalScore');
    const savedLevel = localStorage.getItem('globalLevel');
    
    if (savedScore) globalScore = parseInt(savedScore);
    if (savedLevel) globalLevel = parseInt(savedLevel);
    
    updateScoreBoard();
}

// بدء اللعبة
function startGame(gameType) {
    // إخفاء القائمة
    document.getElementById('gamesMenu').style.display = 'none';
    
    // إظهار اللعبة المطلوبة
    switch(gameType) {
        case 'emergency':
            initEmergencyGame();
            break;
        case 'sideEffects':
            initSideEffectsGame();
            break;
        case 'classification':
            initClassificationGame();
            break;
        case 'memory':
            initMemoryGame();
            break;
        case 'dosage':
            initDosageGame();
            break;
        case 'quiz':
            initQuizGame();
            break;
    }
}

// العودة للقائمة
function backToMenu() {
    // إخفاء جميع الألعاب
    const games = document.querySelectorAll('.game-container');
    games.forEach(game => game.classList.remove('active'));
    
    // إظهار القائمة
    document.getElementById('gamesMenu').style.display = 'grid';
}

// ==============================================
// Game 1: Emergency Pharmacist (صيدلي الطوارئ)
// ==============================================
let emergencyCurrentQuestion = 0;
let emergencyScore = 0;
let emergencyCorrect = 0;
let emergencyTimer;
let emergencyTimeLeft = 30;

function initEmergencyGame() {
    document.getElementById('emergencyGame').classList.add('active');
    emergencyCurrentQuestion = 0;
    emergencyScore = 0;
    emergencyCorrect = 0;
    
    // خلط الأسئلة
    shuffleArray(clinicalCases);
    
    showEmergencyQuestion();
}

function showEmergencyQuestion() {
    if (emergencyCurrentQuestion >= clinicalCases.length) {
        endEmergencyGame();
        return;
    }
    
    const question = clinicalCases[emergencyCurrentQuestion];
    
    // تحديث الإحصائيات
    document.getElementById('emergencyQuestion').textContent = `${emergencyCurrentQuestion + 1}/${clinicalCases.length}`;
    document.getElementById('emergencyScore').textContent = emergencyScore;
    document.getElementById('emergencyCorrect').textContent = emergencyCorrect;
    
    // تحديث شريط التقدم
    const progress = ((emergencyCurrentQuestion + 1) / clinicalCases.length) * 100;
    document.getElementById('emergencyProgress').style.width = progress + '%';
    
    // عرض السؤال
    document.getElementById('emergencyCaseText').textContent = question.case;
    
    // عرض الخيارات
    const optionsContainer = document.getElementById('emergencyOptions');
    optionsContainer.innerHTML = '';
    
    const shuffledOptions = [...question.options];
    shuffleArray(shuffledOptions);
    
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkEmergencyAnswer(option, question.correct);
        optionsContainer.appendChild(btn);
    });
    
    // إخفاء رسالة التغذية الراجعة والزر التالي
    document.getElementById('emergencyFeedback').classList.remove('show');
    document.getElementById('emergencyNext').classList.remove('show');
    
    // بدء المؤقت
    startEmergencyTimer();
}

function startEmergencyTimer() {
    emergencyTimeLeft = 30;
    document.getElementById('emergencyTimer').textContent = emergencyTimeLeft;
    document.getElementById('emergencyTimer').classList.remove('warning');
    
    clearInterval(emergencyTimer);
    emergencyTimer = setInterval(() => {
        emergencyTimeLeft--;
        document.getElementById('emergencyTimer').textContent = emergencyTimeLeft;
        
        if (emergencyTimeLeft <= 10) {
            document.getElementById('emergencyTimer').classList.add('warning');
        }
        
        if (emergencyTimeLeft <= 0) {
            clearInterval(emergencyTimer);
            checkEmergencyAnswer(null, clinicalCases[emergencyCurrentQuestion].correct);
        }
    }, 1000);
}

function checkEmergencyAnswer(selected, correct) {
    clearInterval(emergencyTimer);
    
    const question = clinicalCases[emergencyCurrentQuestion];
    const buttons = document.querySelectorAll('#emergencyOptions .option-btn');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add('correct');
        } else if (btn.textContent === selected && selected !== correct) {
            btn.classList.add('wrong');
        }
    });
    
    totalQuestions++;
    
    const feedback = document.getElementById('emergencyFeedback');
    
    if (selected === correct) {
        // إجابة صحيحة
        const points = 10 + emergencyTimeLeft; // نقاط إضافية للسرعة
        emergencyScore += points;
        emergencyCorrect++;
        totalCorrect++;
        currentStreak++;
        globalScore += points;
        
        feedback.textContent = `✅ إجابة صحيحة! حصلت على ${points} نقطة. ${question.explanation}`;
        feedback.classList.remove('error');
    } else {
        // إجابة خاطئة
        currentStreak = 0;
        feedback.textContent = `❌ إجابة خاطئة! الإجابة الصحيحة: ${question.correctArabic}. ${question.explanation}`;
        feedback.classList.add('error');
    }
    
    feedback.classList.add('show');
    document.getElementById('emergencyNext').classList.add('show');
    
    updateScoreBoard();
}

function nextEmergencyQuestion() {
    emergencyCurrentQuestion++;
    showEmergencyQuestion();
}

function endEmergencyGame() {
    const feedback = document.getElementById('emergencyFeedback');
    const percentage = Math.round((emergencyCorrect / clinicalCases.length) * 100);
    
    feedback.innerHTML = `
        <h2>🎉 انتهت اللعبة!</h2>
        <p>النقاط: ${emergencyScore}</p>
        <p>الإجابات الصحيحة: ${emergencyCorrect}/${clinicalCases.length}</p>
        <p>النسبة: ${percentage}%</p>
        <p style="margin-top: 15px;">${percentage >= 80 ? '🏆 ممتاز! أنت صيدلي خبير!' : percentage >= 60 ? '👍 جيد جداً! استمر في التعلم' : '💪 يمكنك التحسن! راجع المادة وحاول مرة أخرى'}</p>
    `;
    feedback.classList.remove('error');
    feedback.classList.add('show');
    
    document.getElementById('emergencyNext').style.display = 'none';
    document.getElementById('emergencyTimer').style.display = 'none';
}

// ==============================================
// Game 2: Side Effects Expert (خبير الآثار الجانبية)
// ==============================================
let sideEffectsCurrentQuestion = 0;
let sideEffectsScore = 0;

function initSideEffectsGame() {
    document.getElementById('sideEffectsGame').classList.add('active');
    sideEffectsCurrentQuestion = 0;
    sideEffectsScore = 0;
    
    shuffleArray(sideEffectsQuestions);
    
    showSideEffectsQuestion();
}

function showSideEffectsQuestion() {
    if (sideEffectsCurrentQuestion >= sideEffectsQuestions.length) {
        endSideEffectsGame();
        return;
    }
    
    const question = sideEffectsQuestions[sideEffectsCurrentQuestion];
    
    document.getElementById('sideEffectsQuestion').textContent = `${sideEffectsCurrentQuestion + 1}/${sideEffectsQuestions.length}`;
    document.getElementById('sideEffectsScore').textContent = sideEffectsScore;
    
    const progress = ((sideEffectsCurrentQuestion + 1) / sideEffectsQuestions.length) * 100;
    document.getElementById('sideEffectsProgress').style.width = progress + '%';
    
    document.getElementById('sideEffectsText').textContent = question.question;
    
    const optionsContainer = document.getElementById('sideEffectsOptions');
    optionsContainer.innerHTML = '';
    
    const shuffledOptions = [...question.options];
    shuffleArray(shuffledOptions);
    
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkSideEffectsAnswer(option, question.correct);
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById('sideEffectsFeedback').classList.remove('show');
    document.getElementById('sideEffectsNext').classList.remove('show');
}

function checkSideEffectsAnswer(selected, correct) {
    const question = sideEffectsQuestions[sideEffectsCurrentQuestion];
    const buttons = document.querySelectorAll('#sideEffectsOptions .option-btn');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add('correct');
        } else if (btn.textContent === selected && selected !== correct) {
            btn.classList.add('wrong');
        }
    });
    
    totalQuestions++;
    
    const feedback = document.getElementById('sideEffectsFeedback');
    
    if (selected === correct) {
        const points = 15;
        sideEffectsScore += points;
        totalCorrect++;
        currentStreak++;
        globalScore += points;
        
        feedback.textContent = `✅ إجابة صحيحة! ${question.correctArabic} هو الدواء الصحيح. حصلت على ${points} نقطة.`;
        feedback.classList.remove('error');
    } else {
        currentStreak = 0;
        feedback.textContent = `❌ إجابة خاطئة! الإجابة الصحيحة: ${question.correctArabic}`;
        feedback.classList.add('error');
    }
    
    feedback.classList.add('show');
    document.getElementById('sideEffectsNext').classList.add('show');
    
    updateScoreBoard();
}

function nextSideEffectsQuestion() {
    sideEffectsCurrentQuestion++;
    showSideEffectsQuestion();
}

function endSideEffectsGame() {
    const feedback = document.getElementById('sideEffectsFeedback');
    const percentage = Math.round((totalCorrect / sideEffectsQuestions.length) * 100);
    
    feedback.innerHTML = `
        <h2>🎉 انتهت اللعبة!</h2>
        <p>النقاط: ${sideEffectsScore}</p>
        <p>أنت الآن خبير في الآثار الجانبية! 💊</p>
    `;
    feedback.classList.remove('error');
    feedback.classList.add('show');
    
    document.getElementById('sideEffectsNext').style.display = 'none';
}

// ==============================================
// Game 3: Classification Challenge (تصنيف الأدوية)
// ==============================================
let classificationScore = 0;
let classificationRemaining = 0;

function initClassificationGame() {
    document.getElementById('classificationGame').classList.add('active');
    classificationScore = 0;
    classificationRemaining = drugsForClassification.length;
    
    document.getElementById('classificationScore').textContent = classificationScore;
    document.getElementById('classificationRemaining').textContent = classificationRemaining;
    
    // إنشاء الأدوية
    const drugItems = document.getElementById('drugItems');
    drugItems.innerHTML = '<h3 style="color: #667eea; margin-bottom: 15px;">الأدوية</h3>';
    
    shuffleArray(drugsForClassification);
    
    drugsForClassification.forEach((drug, index) => {
        const item = document.createElement('div');
        item.className = 'drug-item';
        item.textContent = drug.name;
        item.draggable = true;
        item.dataset.category = drug.category;
        item.dataset.index = index;
        
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
        
        drugItems.appendChild(item);
    });
    
    // إنشاء مناطق التصنيف
    const categories = [...new Set(drugsForClassification.map(d => d.category))];
    const categoryZones = document.getElementById('categoryZones');
    categoryZones.innerHTML = '<h3 style="color: #667eea; margin-bottom: 15px;">المجموعات الدوائية</h3>';
    
    categories.forEach(category => {
        const zone = document.createElement('div');
        zone.className = 'category-zone';
        zone.dataset.category = category;
        
        const title = document.createElement('h3');
        title.textContent = getCategoryArabicName(category);
        zone.appendChild(title);
        
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
        zone.addEventListener('dragleave', handleDragLeave);
        
        categoryZones.appendChild(zone);
    });
}

function getCategoryArabicName(category) {
    const names = {
        'SSRI': 'مثبطات SSRI',
        'SNRI': 'مثبطات SNRI',
        'TCA': 'ثلاثية الحلقات',
        'Atypical': 'غير نمطية',
        'Mood Stabilizer': 'مثبتات المزاج',
        'Benzodiazepine': 'بنزوديازيبين'
    };
    return names[category] || category;
}

let draggedElement = null;

function handleDragStart(e) {
    draggedElement = e.target;
    e.target.style.opacity = '0.5';
}

function handleDragEnd(e) {
    e.target.style.opacity = '1';
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    const dropZone = e.currentTarget;
    const drugCategory = draggedElement.dataset.category;
    const zoneCategory = dropZone.dataset.category;
    
    const feedback = document.getElementById('classificationFeedback');
    
    if (drugCategory === zoneCategory) {
        // إجابة صحيحة
        dropZone.appendChild(draggedElement);
        draggedElement.draggable = false;
        draggedElement.style.cursor = 'default';
        draggedElement.style.background = '#4caf50';
        draggedElement.style.color = 'white';
        
        classificationScore += 20;
        classificationRemaining--;
        globalScore += 20;
        totalCorrect++;
        currentStreak++;
        
        document.getElementById('classificationScore').textContent = classificationScore;
        document.getElementById('classificationRemaining').textContent = classificationRemaining;
        
        feedback.textContent = `✅ ممتاز! ${draggedElement.textContent} ينتمي إلى ${getCategoryArabicName(zoneCategory)}`;
        feedback.classList.remove('error');
        feedback.classList.add('show');
        
        setTimeout(() => {
            feedback.classList.remove('show');
        }, 2000);
        
        if (classificationRemaining === 0) {
            endClassificationGame();
        }
    } else {
        // إجابة خاطئة
        currentStreak = 0;
        feedback.textContent = `❌ خطأ! ${draggedElement.textContent} لا ينتمي إلى هذه المجموعة`;
        feedback.classList.add('error');
        feedback.classList.add('show');
        
        setTimeout(() => {
            feedback.classList.remove('show');
        }, 2000);
    }
    
    totalQuestions++;
    updateScoreBoard();
}

function endClassificationGame() {
    const feedback = document.getElementById('classificationFeedback');
    
    feedback.innerHTML = `
        <h2>🎉 أحسنت!</h2>
        <p>أكملت تصنيف جميع الأدوية بنجاح!</p>
        <p>النقاط الكلية: ${classificationScore}</p>
        <p>🏆 أنت خبير في تصنيف الأدوية النفسية!</p>
    `;
    feedback.classList.remove('error');
    feedback.classList.add('show');
}

// ==============================================
// Game 4: Memory Match (لعبة الذاكرة)
// ==============================================
let memoryCards = [];
let memoryFlippedCards = [];
let memoryMatches = 0;
let memoryMoves = 0;

function initMemoryGame() {
    document.getElementById('memoryGame').classList.add('active');
    memoryMatches = 0;
    memoryMoves = 0;
    memoryFlippedCards = [];
    
    document.getElementById('memoryMoves').textContent = memoryMoves;
    document.getElementById('memoryPairs').textContent = memoryPairs.length;
    document.getElementById('memoryScore').textContent = 0;
    
    // إنشاء البطاقات
    memoryCards = [];
    memoryPairs.forEach(pair => {
        memoryCards.push({ id: pair.id, text: pair.text, type: 'drug' });
        memoryCards.push({ id: pair.id, text: pair.pair, type: 'use' });
    });
    
    shuffleArray(memoryCards);
    
    const container = document.getElementById('memoryCards');
    container.innerHTML = '';
    
    memoryCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.textContent = '?';
        cardElement.dataset.id = card.id;
        cardElement.dataset.text = card.text;
        cardElement.dataset.index = index;
        cardElement.onclick = () => flipMemoryCard(index);
        
        container.appendChild(cardElement);
    });
}

function flipMemoryCard(index) {
    const cards = document.querySelectorAll('.memory-card');
    const card = cards[index];
    
    if (card.classList.contains('flipped') || card.classList.contains('matched') || memoryFlippedCards.length >= 2) {
        return;
    }
    
    card.classList.add('flipped');
    card.textContent = memoryCards[index].text;
    memoryFlippedCards.push({ index, id: memoryCards[index].id });
    
    if (memoryFlippedCards.length === 2) {
        memoryMoves++;
        document.getElementById('memoryMoves').textContent = memoryMoves;
        
        setTimeout(checkMemoryMatch, 1000);
    }
}

function checkMemoryMatch() {
    const cards = document.querySelectorAll('.memory-card');
    const [card1, card2] = memoryFlippedCards;
    
    if (card1.id === card2.id) {
        // تطابق
        cards[card1.index].classList.add('matched');
        cards[card2.index].classList.add('matched');
        
        memoryMatches++;
        const score = 50;
        globalScore += score;
        totalCorrect++;
        currentStreak++;
        
        document.getElementById('memoryPairs').textContent = memoryPairs.length - memoryMatches;
        document.getElementById('memoryScore').textContent = memoryMatches * score;
        
        if (memoryMatches === memoryPairs.length) {
            endMemoryGame();
        }
    } else {
        // عدم تطابق
        cards[card1.index].classList.remove('flipped');
        cards[card2.index].classList.remove('flipped');
        cards[card1.index].textContent = '?';
        cards[card2.index].textContent = '?';
        currentStreak = 0;
    }
    
    memoryFlippedCards = [];
    totalQuestions++;
    updateScoreBoard();
}

function endMemoryGame() {
    const feedback = document.getElementById('memoryFeedback');
    const totalScore = memoryMatches * 50;
    
    feedback.innerHTML = `
        <h2>🎉 رائع!</h2>
        <p>أكملت جميع الأزواج في ${memoryMoves} محاولة!</p>
        <p>النقاط: ${totalScore}</p>
        <p>${memoryMoves <= 20 ? '🏆 ذاكرة ممتازة!' : memoryMoves <= 30 ? '👍 أداء جيد!' : '💪 يمكنك التحسن!'}</p>
    `;
    feedback.classList.remove('error');
    feedback.classList.add('show');
}

// ==============================================
// Game 5: Dosage Detective (محقق الجرعات)
// ==============================================
let dosageCurrentQuestion = 0;
let dosageScore = 0;

function initDosageGame() {
    document.getElementById('dosageGame').classList.add('active');
    dosageCurrentQuestion = 0;
    dosageScore = 0;
    
    shuffleArray(dosageQuestions);
    
    showDosageQuestion();
}

function showDosageQuestion() {
    if (dosageCurrentQuestion >= dosageQuestions.length) {
        endDosageGame();
        return;
    }
    
    const question = dosageQuestions[dosageCurrentQuestion];
    
    document.getElementById('dosageQuestion').textContent = `${dosageCurrentQuestion + 1}/${dosageQuestions.length}`;
    document.getElementById('dosageScore').textContent = dosageScore;
    
    const progress = ((dosageCurrentQuestion + 1) / dosageQuestions.length) * 100;
    document.getElementById('dosageProgress').style.width = progress + '%';
    
    document.getElementById('dosageText').textContent = question.question;
    
    const optionsContainer = document.getElementById('dosageOptions');
    optionsContainer.innerHTML = '';
    
    const shuffledOptions = [...question.options];
    shuffleArray(shuffledOptions);
    
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkDosageAnswer(option, question.correct);
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById('dosageFeedback').classList.remove('show');
    document.getElementById('dosageNext').classList.remove('show');
}

function checkDosageAnswer(selected, correct) {
    const buttons = document.querySelectorAll('#dosageOptions .option-btn');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add('correct');
        } else if (btn.textContent === selected && selected !== correct) {
            btn.classList.add('wrong');
        }
    });
    
    totalQuestions++;
    
    const feedback = document.getElementById('dosageFeedback');
    
    if (selected === correct) {
        const points = 15;
        dosageScore += points;
        totalCorrect++;
        currentStreak++;
        globalScore += points;
        
        feedback.textContent = `✅ إجابة صحيحة! حصلت على ${points} نقطة.`;
        feedback.classList.remove('error');
    } else {
        currentStreak = 0;
        feedback.textContent = `❌ إجابة خاطئة! الإجابة الصحيحة: ${correct}`;
        feedback.classList.add('error');
    }
    
    feedback.classList.add('show');
    document.getElementById('dosageNext').classList.add('show');
    
    updateScoreBoard();
}

function nextDosageQuestion() {
    dosageCurrentQuestion++;
    showDosageQuestion();
}

function endDosageGame() {
    const feedback = document.getElementById('dosageFeedback');
    const percentage = Math.round((totalCorrect / dosageQuestions.length) * 100);
    
    feedback.innerHTML = `
        <h2>🎉 انتهت اللعبة!</h2>
        <p>النقاط: ${dosageScore}</p>
        <p>${percentage >= 80 ? '🏆 ممتاز! أنت محقق جرعات خبير!' : percentage >= 60 ? '👍 جيد جداً!' : '💪 راجع الجرعات وحاول مرة أخرى'}</p>
    `;
    feedback.classList.remove('error');
    feedback.classList.add('show');
    
    document.getElementById('dosageNext').style.display = 'none';
}

// ==============================================
// Game 6: Comprehensive Quiz (الاختبار الشامل)
// ==============================================
let quizCurrentQuestion = 0;
let quizScore = 0;
let quizCorrect = 0;

function initQuizGame() {
    document.getElementById('quizGame').classList.add('active');
    quizCurrentQuestion = 0;
    quizScore = 0;
    quizCorrect = 0;
    
    shuffleArray(comprehensiveQuiz);
    
    showQuizQuestion();
}

function showQuizQuestion() {
    if (quizCurrentQuestion >= comprehensiveQuiz.length) {
        endQuizGame();
        return;
    }
    
    const question = comprehensiveQuiz[quizCurrentQuestion];
    
    document.getElementById('quizQuestion').textContent = `${quizCurrentQuestion + 1}/${comprehensiveQuiz.length}`;
    document.getElementById('quizScore').textContent = quizScore;
    
    const accuracy = quizCurrentQuestion > 0 ? Math.round((quizCorrect / quizCurrentQuestion) * 100) : 100;
    document.getElementById('quizAccuracy').textContent = accuracy + '%';
    
    const progress = ((quizCurrentQuestion + 1) / comprehensiveQuiz.length) * 100;
    document.getElementById('quizProgress').style.width = progress + '%';
    
    document.getElementById('quizText').textContent = question.question;
    
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    
    const shuffledOptions = [...question.options];
    shuffleArray(shuffledOptions);
    
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkQuizAnswer(option, question.correct);
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById('quizFeedback').classList.remove('show');
    document.getElementById('quizNext').classList.remove('show');
}

function checkQuizAnswer(selected, correct) {
    const buttons = document.querySelectorAll('#quizOptions .option-btn');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add('correct');
        } else if (btn.textContent === selected && selected !== correct) {
            btn.classList.add('wrong');
        }
    });
    
    totalQuestions++;
    
    const feedback = document.getElementById('quizFeedback');
    
    if (selected === correct) {
        const points = 10;
        quizScore += points;
        quizCorrect++;
        totalCorrect++;
        currentStreak++;
        globalScore += points;
        
        feedback.textContent = `✅ إجابة صحيحة! حصلت على ${points} نقطة.`;
        feedback.classList.remove('error');
    } else {
        currentStreak = 0;
        feedback.textContent = `❌ إجابة خاطئة! الإجابة الصحيحة: ${correct}`;
        feedback.classList.add('error');
    }
    
    feedback.classList.add('show');
    document.getElementById('quizNext').classList.add('show');
    
    updateScoreBoard();
}

function nextQuizQuestion() {
    quizCurrentQuestion++;
    showQuizQuestion();
}

function endQuizGame() {
    const feedback = document.getElementById('quizFeedback');
    const percentage = Math.round((quizCorrect / comprehensiveQuiz.length) * 100);
    
    feedback.innerHTML = `
        <h2>🎉 انتهى الاختبار الشامل!</h2>
        <p>النقاط الكلية: ${quizScore}</p>
        <p>الإجابات الصحيحة: ${quizCorrect}/${comprehensiveQuiz.length}</p>
        <p>النسبة: ${percentage}%</p>
        <p style="margin-top: 15px;">${percentage >= 90 ? '🏆 ممتاز جداً! أنت خبير في الأدوية النفسية!' : percentage >= 70 ? '👍 جيد جداً! لديك معرفة قوية' : percentage >= 50 ? '💪 لا بأس! استمر في الدراسة' : '📚 راجع المادة جيداً وحاول مرة أخرى'}</p>
    `;
    feedback.classList.remove('error');
    feedback.classList.add('show');
    
    document.getElementById('quizNext').style.display = 'none';
}

// ==============================================
// Utility Functions
// ==============================================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// تحميل البيانات عند بدء الصفحة
window.onload = function() {
    loadSavedData();
};
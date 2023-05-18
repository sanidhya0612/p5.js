function preload()
{}

function setup()
{
    canvas = createCanvas(900,500);
    canvas.position(200,140);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw()
{
    image(video, 230, 50, 500, 400);

    circle(240, 60, 80);
    circle(710, 60, 80);
    circle(240, 440, 80);
    circle(710, 440, 80);
    let c = color('cyan');
    fill(c);

    rect(220, 95, 35, 312);
    rect(695, 95, 35, 312);
    rect(275, 425, 398, 35);
    rect(275, 40, 398, 35);
    let b = color('limegreen');
    fill(b);
    
}

function take_snapshot()
{
    save('FrameName.png');
}
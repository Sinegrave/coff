---
title: "Arduino Troubleshooting Log"
date: "2026-05-07"
description: "Notes written while troubleshooting an Arduino project. Features Arduino code and my troubleshooting process."
author: "Afi Belgrave"
tags:
  - "Arduino"
  - "Troubleshooting"
  - "Robotics"
image: "/images/placeholder.svg"
---

	The issues with the LED Matrix are twofold. 
    
    For one, there is an 'echo ghost' one LED to the left of the printed values. The other issue is that the image as a whole is being displayed one pixel to the right. When items spawn in, they are appearing at [1,1] rather than [0,0]. This is strange because on my Serial.monitor(), they are being displayed properly in the [0,0] position, and the LED matrix has been designed to directly mirror what is being printed to the Serial.monitor().

To me, these two issues are related. It appears if objects are momentarily being printed in the right spot, one pixel to the left, but then are for some reason being printed for a second time in the wrong spot one pixel to the right.

To troubleshoot this, I have tried a number of things. I checked my wiring many, many times, and I have ensured that everything is indeed wired properly. I did this by going wire-by-wire across both the columns and the rows, and everything indeed corresponds with the proper output. If I pull out the wire for row four, then row four disappears. If I remove the wire from column six, then column six disappears. This way, I was able to prove that the issue was not with the wiring but with my code.

I then went into my refresh() function and did my best to understand how things are being printed to the display. 
		As there are 16 rows and 8 columns, I created nested for loops. My initial theory was that objects were not being printed at [0,0] because perhaps these loops were set for int = 1, or something similar. I spent a great deal of time changing how these loops increments, how long they loop for, and how they count. In the end, I was indeed able to shift how things were printing on my board, but this did not fix this issue of seeing column 2 and row 2 as column 1 and row 1.

	Ultimately, even with lots of tinkering, I was not able to figure out why my display ended up this way. Presently, I believe that my function for moving and printing objects is defunct in some way, but this does not explain why things appear functional on the Serial.monitor().

	I created a second program called matrixTest.ino to work on the display without damaging the code as a whole. In this smaller program, the screen functioned properly, even when using the same printing function as in the main code:

```
// CLOCK PULSE LOW
  digitalWrite (3, LOW);
  
  // LATCH PULSE LOW
  digitalWrite (5, LOW);

  // SELECT COLUMN
  for (int i = 0; i <= 7; i++) {
    int set = i + 6;
    digitalWrite (set, LOW);
    

    // SELECT ROW
    for (int j = 15; j >= 0; j--) {
        // INPUT DATA START //////////
        // SELECT DATA AT POSITION [i][j]
        if (mainScreen[j][i] == 0){
          digitalWrite (4, LOW);
        }
        else if (mainScreen[j][i] == 1){
          digitalWrite (4, HIGH);
        }
        // INPUT DATA END ///////////
      
      
      
      // CLOCK PULSE HIGH
      digitalWrite (3, HIGH);

      // CLOCK PULSE LOW
      digitalWrite (3, LOW);
    }
  
    // LATCH PULSE HIGH
    digitalWrite (5, HIGH);

    // LATCH PULSE LOW
    digitalWrite (5, LOW);

    // POWER UP THE INDICATOR LED
    digitalWrite (set, HIGH);
  }
}

```

While I am still deeply confused by this, I'm proud of my work on this project. I find my code to be functional despite these display errors.

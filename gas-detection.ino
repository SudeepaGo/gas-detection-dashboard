#include <MQ135.h>

// Attach sensor to pin A0
MQ135 gasSensor = MQ135(A0);

void setup() {
  Serial.begin(9600); //Connect to serial port with rate of 9600bps.
  delay(1000);
}

void loop() {
//  float rzero = gasSensor.getRZero();
//  Serial.print("RZero value: ");
//  Serial.println(rzero);
//  Serial.println(analogRead(A0));
  float ppm = gasSensor.getPPM();
  Serial.println(ppm);
  delay(5000); //Delay, specifies gap between two readings in miliseconds.
}
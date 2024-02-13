#include<bits/stdc++.h>
using namespace std;

class Rectangle{
	public:
		double length;
		double breadth;
		Rectangle(){
			cout<<"Default Constructor\n";
			length = 0.0;
			breadth = 0.0;
		}
		Rectangle(double len,double brd){
			cout<<"Parameterized constructor";
			length = len;
			breadth = brd;
		}
		~Rectangle(){
			cout<<"Destructor called\n";
		}
		double area(){
			return length*breadth;
		}
};

int main(){
	Rectangle rect1;
	cout<<"area of reactangle one is "<<rect1.area();
	Rectangle rect2(12.3,22.5);
	cout<<"area of rectangle two is "<<Rectangle rect2(12.3,22.5);
}

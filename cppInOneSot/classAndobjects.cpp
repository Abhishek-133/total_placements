#include<iostream>
using namespace std;
class Rectangle{
	public:
		double length;
		double breadth;
		
		double area(){
			return length*breadth;
		}
};
int main(){
	Rectangle rect;
	rect.length=10;
	rect.breadth=20;
//	double area = rect.area();
	cout<<"area of rectagle is->"<<rect.area();
	return 0;
}

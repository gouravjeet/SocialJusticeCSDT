#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include "dialog.h"
#include "apitest/apitest/champion.h"
#include "apitest/apitest/player.h"
#include "apitest/apitest/match.h"
#include <QString>
#include <vector>

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

    void setDisplayData(player* p, QVector<champion*> *c, QVector<match*> *m);
    void displayData();

    void setChampData(std::vector<champion> c);

private slots:

    void on_pushButton_clicked();

private:
    Dialog *myNewDialog;

public:

    std::vector<champion> mclv;
    player mp;
    QVector<champion> mcl;
    player *myPlayer;
    QVector<champion*> *myChampionList;
    QVector<match*> *myMatchList;

private:
    Ui::MainWindow *ui;
};

#endif // MAINWINDOW_H

# Generated by Django 2.1.3 on 2018-11-25 17:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('matchingsite', '0017_userprofile_test'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='test',
        ),
    ]

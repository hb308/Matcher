# Generated by Django 2.1.3 on 2018-11-24 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('matchingsite', '0011_auto_20181122_1730'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='allowloc',
            field=models.BooleanField(null=True),
        ),
    ]